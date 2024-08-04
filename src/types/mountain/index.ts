export interface WeatherResponse {
  date: string
  rainPercent: string
  skystate: string
  temperature: string
}

export interface CourseType {
  courseName: string
  courseNo: string
  mntiDist: string
  mntiLevel: '쉬움' | '어려움' | '중간'
  mntiTime: number
  paths: { x: number; y: number }[][]
}

export interface MountainResponse {
  mntiName: string
  mntiLevel: string
  mntiHigh: number
  mntiAddress: string
  famous100: boolean
  photoFile: any
  weatherList: WeatherResponse[]
  course: CourseType[]
}
