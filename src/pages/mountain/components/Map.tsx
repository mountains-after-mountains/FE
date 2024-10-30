import { CourseType } from '@/types/mountain'
import { useEffect, useRef } from 'react'

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

const Map = ({ markers }: Props) => {
  const apiKey = import.meta.env.VITE_KAKAO_MAP_KEY
  const mapRef = useRef<any>(null)

  useEffect(() => {
    if (!apiKey) {
      console.error('Kakao Map API key is missing.')
      return
    }

    // 스크립트가 이미 로드되었는지 확인
    if (window.kakao && window.kakao.maps) {
      console.log('Kakao Maps script already loaded')
      if (markers && markers.length > 0) {
        initializeMap()
      }
      return
    }

    // 스크립트가 로드되지 않았다면 로드
    const script = document.createElement('script')
    script.id = 'kakao-map-script'
    script.async = true
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&autoload=false`
    document.head.appendChild(script)

    script.onload = () => {
      console.log('Kakao Maps script loaded')
      if (window.kakao && window.kakao.maps) {
        window.kakao.maps.load(() => {
          console.log('Kakao Maps API loaded')
          if (markers && markers.length > 0) {
            initializeMap()
          }
        })
      } else {
        console.error('Kakao Maps API is not available.')
      }
    }

    // Cleanup: 스크립트 제거하지 않음
    return () => {
      // document.head.removeChild(script) // 제거하지 않음
    }
  }, [apiKey])

  useEffect(() => {
    if (window.kakao && window.kakao.maps && markers && markers.length > 0) {
      initializeMap()
    }
  }, [markers])

  const initializeMap = () => {
    // markers 데이터 검증
    if (
      !markers ||
      markers.length === 0 ||
      !markers[0].paths ||
      markers[0].paths.length === 0 ||
      !markers[0].paths[0] ||
      markers[0].paths[0].length === 0
    ) {
      console.error('Markers data is incomplete or malformed:', markers)
      return
    }

    console.log('Initializing map with markers:', markers)

    const container = document.getElementById('map')
    if (!container) {
      console.error('Map container not found')
      return
    }

    const firstMarker = markers[0]
    const center = new window.kakao.maps.LatLng(firstMarker.paths[0][0].y, firstMarker.paths[0][0].x)

    // 맵이 이미 초기화되었는지 확인
    if (mapRef.current) {
      mapRef.current.setCenter(center)
      mapRef.current.setLevel(3)
    } else {
      const options = {
        center: center,
        level: 3,
      }

      mapRef.current = new window.kakao.maps.Map(container, options)
    }

    // 기존 마커 제거 (필요 시)
    // window.kakao.maps.Marker.removeMarkers(existingMarkers)

    const positions = markers
      .map(marker => {
        if (!marker.paths || marker.paths.length === 0 || !marker.paths[0] || marker.paths[0].length === 0) {
          console.error('Marker paths are incomplete:', marker)
          return null
        }

        return {
          title: marker.courseName,
          latlng: new window.kakao.maps.LatLng(marker.paths[0][0].y, marker.paths[0][0].x),
        }
      })
      .filter(position => position !== null)

    positions.forEach(position => {
      const content = `
        <div style="display: flex; flex-direction: column; align-items: center;">
          <div style="display: flex; height: 16px; width: 16px; align-items: center; justify-content: center; border-radius: 50%; border: 1px solid white; background-color: #16a34a;">
            <div style="height: 6px; width: 6px; border-radius: 50%; background-color: white;"></div>
          </div>
          <span style="font-size: 10px">${position.title}</span>
        </div>`
      new window.kakao.maps.CustomOverlay({
        map: mapRef.current,
        position: position.latlng,
        title: position.title,
        content,
      })
    })

    // 맵 리사이즈 트리거 (필요시)
    window.kakao.maps.event.trigger(mapRef.current, 'resize')
  }

  return (
    <div className="w-full">
      <div id="map" className="h-[170px] w-full rounded-[20px]" />
    </div>
  )
}

export default Map
