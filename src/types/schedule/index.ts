import { Weather } from '@/types/weather'

export interface MountainListResponse {
  mntiListNo: string
  mntiName: string
  mntiLevel: string
  potoFile: string | null
  mntiAdd: string
  height: number
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

// 코스 정보 타입 정의
interface Course {
  courseNo: string | null
  courseName: string | null
  mntiTime: number | null
  mntiDist: number | null
  mntiLevel: number | null
  paths: any | null
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
  mountainImg: string | null
  course: Course
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
