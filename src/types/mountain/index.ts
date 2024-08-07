import { WeatherType } from '@/components/common/Weather'

export interface WeatherResponse {
  date: string
  rainPercent: string
  skyState: WeatherType
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
