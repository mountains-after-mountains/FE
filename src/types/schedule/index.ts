import { CourseType, Weather } from 'src/types/common'

export interface MountainListResponse {
  mntiListNo: string
  mntiName: string
  mntiLevel: string
  potoFile: string | null
  mntiAdd: string
  height: number
  famous100: boolean
  seoulTrail: boolean
  photoSource: string | null
}
export interface courseListType {
  courseNo: string
  courseName: string
}

export interface ScheduleDataPayload {
  mountainId: string
  courseNo: string
  scheduleDate: string
  memberCount: string
}

export interface ScheduleListResponse {
  scheduleId: string
  mountain: string
  memberCount: number
  scheduleDate: string
  course: string | null
  weatherList: Weather[]
}

// 스케줄 정보 타입 정의
export interface Schedule {
  scheduleId: string
  mountainId: string
  mountainName: string
  courseName: string | null
  scheduleDate: string
  memberCount: string
  mountainHigh: number
  mountainLevel: string
  mountainAddress: string
  mountainImg: string
  course: CourseType
  weatherList: Weather[]
  famous100: boolean
}

export interface MemoItem {
  memoId: string
  scheduleId: string
  content: string
  checkStatus: boolean
}

export interface MemoDrawerProps {
  memoList: MemoItem[]
  memo: string
  setMemo: (value: string) => void
  handleRegisterMemo: () => void
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  isAuthenticated: boolean
  setIsLogin: (login: boolean) => void
}
export interface MemoRequestItem {
  text: string
  checked: boolean
}

export interface RegisterMemoPayload {
  scheduleId: string | undefined
  memoRequest: MemoRequestItem[]
}
export interface ModifyMemoPayload {
  memoId: string
  memoContent: string
}
export interface ModifySchedulePayload {
  mountainId: string
  course: string
  scheduleDate: string
  memberCount: string
  scheduleId: string | undefined
}
