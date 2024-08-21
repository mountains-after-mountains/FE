import { WeatherType } from '@/components/common/Weather.tsx'

export interface Weather {
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
