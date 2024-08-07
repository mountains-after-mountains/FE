import { CourseType } from '@/types/mountain'
import { useEffect } from 'react'
import proj4 from 'proj4'

declare global {
  interface Window {
    kakao: any
  }
}

interface Props {
  x?: number
  y?: number
  markers?: CourseType[]
}

interface UTMCoordinate {
  x: number
  y: number
}

const Map = ({ x, y, markers }: Props) => {
  const apiKey = import.meta.env.VITE_KAKAO_MAP_KEY

  function utmToLatLng(coordinates: UTMCoordinate): { latitude: number; longitude: number } {
    const utmProjection = '+proj=utm +zone=52 +ellps=WGS84 +datum=WGS84 +units=m +no_defs'
    const wgs84Projection = 'EPSG:4326'

    const [longitude, latitude] = proj4(utmProjection, wgs84Projection, [coordinates.x, coordinates.y])
    return { latitude, longitude }
  }

  const convertedMarkers = markers?.map(marker => {
    const { latitude, longitude } = utmToLatLng({ x: marker.paths[0][0].x, y: marker.paths[0][0].y })
    return { ...marker, lat: latitude, lng: longitude }
  })

  console.log(convertedMarkers)

  useEffect(() => {
    const script = document.createElement('script')
    script.async = true
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&autoload=false`
    document.head.appendChild(script)

    script.onload = () => {
      if (window.kakao && window.kakao.maps && convertedMarkers) {
        window.kakao.maps.load(() => {
          const container = document.getElementById('map')
          const options = {
            center: new window.kakao.maps.LatLng(convertedMarkers[0].lat, convertedMarkers[0].lng),
            level: 3,
          }
          const map = new window.kakao.maps.Map(container, options)

          const positions = convertedMarkers?.map(marker => {
            return { title: marker.courseName, latlng: new window.kakao.maps.LatLng(marker.lat, marker.lng) }
          })

          positions?.forEach(position => {
            const content = `<div style="display: flex; flex-direction: column; align-items: center;">
            <div style="display: flex; height: 16px; width: 16px; align-items: center; justify-content: center; border-radius: 50%; border: 1px solid white; background-color: #16a34a;">
              <div style="height: 6px; width: 6px; border-radius: 50%; background-color: white;"></div>
            </div>
            <span style="font-size: 10px">${position.title}</span>
          </div>`
            new window.kakao.maps.CustomOverlay({
              map: map,
              position: position.latlng,
              title: position.title,
              content,
            })
          })
        })
      } else {
        console.error('Kakao Maps API is not available.')
      }
    }
    return () => {
      document.head.removeChild(script)
    }
  }, [apiKey, markers])

  return (
    <div className="w-full">
      <div id="map" className="h-[170px] w-full rounded-[20px]" />
    </div>
  )
}

export default Map
