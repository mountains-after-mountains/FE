import blizzardOff from '@/assets/icons/weather/blizzard_off.svg?react'
import blizzardOn from '@/assets/icons/weather/blizzard_on.svg?react'
import blowingSnowOff from '@/assets/icons/weather/blowing_snow_off.svg?react'
import blowingSnowOn from '@/assets/icons/weather/blowing_snow_on.svg?react'
import cloudyClearOff from '@/assets/icons/weather/cloudy_clear_off.svg?react'
import cloudyClearOn from '@/assets/icons/weather/cloudy_clear_on.svg?react'
import cloudyOff from '@/assets/icons/weather/cloudy_off.svg?react'
import cloudyOn from '@/assets/icons/weather/cloudy_on.svg?react'
import drizzleOff from '@/assets/icons/weather/drizzle_off.svg?react'
import drizzleOn from '@/assets/icons/weather/drizzle_on.svg?react'
import drizzleSunOff from '@/assets/icons/weather/drizzle_sun_off.svg?react'
import drizzleSunOn from '@/assets/icons/weather/drizzle_sun_on.svg?react'
import fogOff from '@/assets/icons/weather/fog_off.svg?react'
import fogOn from '@/assets/icons/weather/fog_on.svg?react'
import hailOff from '@/assets/icons/weather/hail_off.svg?react'
import hailOn from '@/assets/icons/weather/hail_on.svg?react'
import heavyRainOff from '@/assets/icons/weather/heavy_rain_off.svg?react'
import heavyRainOn from '@/assets/icons/weather/heavy_rain_on.svg?react'
import humidityOff from '@/assets/icons/weather/humidity_off.svg?react'
import humidityOn from '@/assets/icons/weather/humidity_on.svg?react'
import partlyCloudyOff from '@/assets/icons/weather/partly_cloudy_off.svg?react'
import partlyCloudyOn from '@/assets/icons/weather/partly_cloudy_on.svg?react'
import rainOff from '@/assets/icons/weather/rain_off.svg?react'
import rainOn from '@/assets/icons/weather/rain_on.svg?react'
import rainSunOff from '@/assets/icons/weather/rain_sun_off.svg?react'
import rainSunOn from '@/assets/icons/weather/rain_sun_on.svg?react'
import rainThunderstormOff from '@/assets/icons/weather/rain_thunderstorm_off.svg?react'
import rainThunderstormOn from '@/assets/icons/weather/rain_thunderstorm_on.svg?react'
import scatteredShowersOff from '@/assets/icons/weather/scattered_showers_off.svg?react'
import scatteredShowersOn from '@/assets/icons/weather/scattered_showers_on.svg?react'
import scatteredThunderstormOff from '@/assets/icons/weather/scattered_thunderstorm_off.svg?react'
import scatteredThunderstormOn from '@/assets/icons/weather/scattered_thunderstorm_on.svg?react'
import sleetOff from '@/assets/icons/weather/sleet_off.svg?react'
import sleetOn from '@/assets/icons/weather/sleet_on.svg?react'
import snowOff from '@/assets/icons/weather/snow_off.svg?react'
import snowOn from '@/assets/icons/weather/snow_on.svg?react'
import sunnyOff from '@/assets/icons/weather/sunny_off.svg?react'
import sunnyOn from '@/assets/icons/weather/sunny_on.svg?react'
import thunderstormOff from '@/assets/icons/weather/thunderstorm_off.svg?react'
import thunderstormOn from '@/assets/icons/weather/thunderstorm_on.svg?react'
import windOff from '@/assets/icons/weather/wind_off.svg?react'
import windOn from '@/assets/icons/weather/wind_on.svg?react'
import { WeatherResponse } from '@/types/mountain'
import clsx from 'clsx'
import { format, parse } from 'date-fns'

export type WeatherProps = {
  date: string
  weather: WeatherType
  temperature: number
  isToday?: boolean
}

export type WeatherType =
  | 'blizzard'
  | 'blowing_snow'
  | '흐림'
  | '구름많음'
  | 'drizzle'
  | 'drizzle_sun'
  | 'fog'
  | 'hail'
  | 'heavy_rain'
  | 'humidity'
  | 'partly_cloudy'
  | 'rain'
  | 'rain_sun'
  | 'rain_thunderstorm'
  | 'scattered_showers'
  | 'scattered_thunderstorm'
  | 'sleet'
  | 'snow'
  | '맑음'
  | 'thunderstorm'
  | 'wind'

const weatherIcons = {
  blizzard: {
    on: blizzardOn,
    off: blizzardOff,
  },
  blowing_snow: {
    on: blowingSnowOn,
    off: blowingSnowOff,
  },
  흐림: {
    on: cloudyClearOn,
    off: cloudyClearOff,
  },
  구름많음: {
    on: cloudyOn,
    off: cloudyOff,
  },
  drizzle: {
    on: drizzleOn,
    off: drizzleOff,
  },
  drizzle_sun: {
    on: drizzleSunOn,
    off: drizzleSunOff,
  },
  fog: {
    on: fogOn,
    off: fogOff,
  },
  hail: {
    on: hailOn,
    off: hailOff,
  },
  heavy_rain: {
    on: heavyRainOn,
    off: heavyRainOff,
  },
  humidity: {
    on: humidityOn,
    off: humidityOff,
  },
  partly_cloudy: {
    on: partlyCloudyOn,
    off: partlyCloudyOff,
  },
  rain: {
    on: rainOn,
    off: rainOff,
  },
  rain_sun: {
    on: rainSunOn,
    off: rainSunOff,
  },
  rain_thunderstorm: {
    on: rainThunderstormOn,
    off: rainThunderstormOff,
  },
  scattered_showers: {
    on: scatteredShowersOn,
    off: scatteredShowersOff,
  },
  scattered_thunderstorm: {
    on: scatteredThunderstormOn,
    off: scatteredThunderstormOff,
  },
  sleet: {
    on: sleetOn,
    off: sleetOff,
  },
  snow: {
    on: snowOn,
    off: snowOff,
  },
  맑음: {
    on: sunnyOn,
    off: sunnyOff,
  },
  thunderstorm: {
    on: thunderstormOn,
    off: thunderstormOff,
  },
  wind: {
    on: windOn,
    off: windOff,
  },
}

const isTodayFn = (date: string) => {
  const inputDate = new Date(`${date.slice(0, 4)}-${date.slice(4, 6)}-${date.slice(6, 8)}`)

  const today = new Date()

  const formattedDate = `${String(inputDate.getMonth() + 1).padStart(2, '0')}.${String(inputDate.getDate()).padStart(2, '0')}`
  const formattedToday = `${String(today.getMonth() + 1).padStart(2, '0')}.${String(today.getDate()).padStart(2, '0')}`

  return { isToday: formattedDate === formattedToday, formattedDate }
}

const WeatherIcon = ({ weather, isToday }: { weather: WeatherType; isToday?: boolean }) => {
  const status = isToday ? 'on' : 'off'
  const IconComponent = weatherIcons[weather]?.[status]

  return IconComponent ? <IconComponent width={32} height={32} /> : null
}

const Weather = ({ date, skyState, temperature, isToday }: WeatherResponse & { isToday: boolean }) => {
  const parsedDate = parse(date, 'yyyyMMdd', new Date())

  return (
    <div className="flex h-[79px] w-8 flex-col items-center justify-between gap-1">
      <span className={clsx('text-b3 text-gray-400', { 'text-gray-900': isToday })}>{format(parsedDate, 'MM.d')}</span>{' '}
      <WeatherIcon weather={skyState} isToday={isToday} />
      <span className={clsx('text-b2 text-gray-400', { 'text-gray-900': isToday })}>{`${temperature}˚C`}</span>
    </div>
  )
}

const WeatherGroup = ({ weathers, className }: { weathers?: WeatherResponse[]; className?: string }) => {
  return (
    <>
      <div className={clsx('flex w-full justify-between', className)}>
        {weathers?.map(({ skyState, date, temperature, rainPercent }) => {
          const isTodayResult = isTodayFn(date)
          return (
            <Weather
              key={date}
              skyState={skyState}
              date={date}
              isToday={isTodayResult.isToday}
              temperature={temperature}
              rainPercent={rainPercent}
            />
          )
        })}
      </div>
      <div className="mt-[10px] flex items-center justify-end gap-[10px] text-c2 text-gray-300">
        <span>데이터 출처 : Openweather</span>
        <span>지역 : 서울</span>
      </div>
    </>
  )
}

export { WeatherIcon, Weather, WeatherGroup }
