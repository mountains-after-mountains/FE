import { WeatherType } from '@/components/common/Weather.tsx'

export interface Weather {
  date: string
  rainPercent: string
  skyState: WeatherType
  temperature: string
}
