import axios from 'axios'

const API_URL = `${import.meta.env.VITE_APP_API_URL}`

const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
})

// 에러 메시지를 상수로 정의
const ERROR_MESSAGES = {
  400: '잘못된 요청입니다. 입력 값을 확인해주세요.',
  401: '인증에 실패했습니다. 로그인해주세요.',
  403: '접근 권한이 없습니다.',
  404: '요청하신 자원을 찾을 수 없습니다.',
  500: '서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.',
  DEFAULT: '알 수 없는 오류가 발생했습니다.',
} as const

type StatusCode = keyof typeof ERROR_MESSAGES

// 요청 인터셉터
axiosInstance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => Promise.reject(error),
)

// 에러 처리 함수
const handleErrorResponse = (error: any) => {
  if (error.response) {
    const status = error.response.status as StatusCode
    const message = ERROR_MESSAGES[status] || `${ERROR_MESSAGES.DEFAULT} 상태 코드: ${status}`

    console.error(`Backend returned status code: ${status}`)
    console.error('Response error details: ', error.response.data)

    alert(message)

    if (status === 401) {
      window.dispatchEvent(new CustomEvent('unauthorized'))
      sessionStorage.removeItem('authToken')
    }
  } else if (error.request) {
    console.error('No response received from server')
    alert('서버에 응답이 없습니다. 네트워크를 확인해주세요.')
  } else {
    console.error('Error setting up the request:', error.message)
    alert(`요청 설정 중 오류가 발생했습니다: ${error.message}`)
  }

  return Promise.reject(error)
}

// 응답 인터셉터
axiosInstance.interceptors.response.use(response => response, handleErrorResponse)

export default axiosInstance
