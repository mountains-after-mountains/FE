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
  // 기본 마커 참조 제거
  const overlaysRef = useRef<any[]>([]) // 사용자 정의 오버레이 관리를 위한 참조

  useEffect(() => {
    if (!apiKey) {
      console.error('Kakao Map API 키가 누락되었습니다.')
      return
    }

    // 카카오 맵 스크립트가 이미 로드되었는지 확인
    if (window.kakao && window.kakao.maps) {
      console.log('Kakao Maps 스크립트가 이미 로드되었습니다.')
      if (markers && markers.length > 0) {
        initializeMap()
      }
      return
    }

    // 카카오 맵 스크립트 로드
    const script = document.createElement('script')
    script.id = 'kakao-map-script'
    script.async = true
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&autoload=false`
    document.head.appendChild(script)

    script.onload = () => {
      console.log('Kakao Maps 스크립트가 로드되었습니다.')
      if (window.kakao && window.kakao.maps) {
        window.kakao.maps.load(() => {
          console.log('Kakao Maps API가 로드되었습니다.')
          if (markers && markers.length > 0) {
            initializeMap()
          }
        })
      } else {
        console.error('Kakao Maps API를 사용할 수 없습니다.')
      }
    }

    // 정리 작업: 스크립트를 제거하지 않음
    return () => {
      // 필요 시 스크립트를 제거할 수 있습니다.
      // document.head.removeChild(script)
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
      console.error('Markers 데이터가 불완전하거나 잘못되었습니다:', markers)
      return
    }

    console.log('마커로 지도를 초기화합니다:', markers)

    const container = document.getElementById('map')
    if (!container) {
      console.error('지도 컨테이너를 찾을 수 없습니다.')
      return
    }

    // 모든 마커의 좌표를 가져와 LatLngBounds 객체 생성
    const bounds = new window.kakao.maps.LatLngBounds()
    console.log('생성된 bounds:', bounds)

    const validPositions: { title: string; latlng: any }[] = []

    markers.forEach((marker, index) => {
      if (
        marker.paths &&
        marker.paths.length > 0 &&
        marker.paths[0] &&
        marker.paths[0].length > 0 &&
        typeof marker.paths[0][0].y === 'number' &&
        typeof marker.paths[0][0].x === 'number'
      ) {
        const latlng = new window.kakao.maps.LatLng(marker.paths[0][0].y, marker.paths[0][0].x)
        bounds.extend(latlng)
        validPositions.push({
          title: marker.courseName,
          latlng,
        })
        console.log(`마커 ${index + 1} 추가됨:`, marker.courseName, latlng)
      } else {
        console.error('마커의 경로가 불완전합니다:', marker)
      }
    })

    console.log('유효한 위치들:', validPositions)
    console.log('최종 bounds:', bounds)

    if (validPositions.length === 0) {
      console.error('표시할 유효한 마커가 없습니다.')
      return
    }

    // 첫 번째 마커의 좌표로 지도 중심 설정
    const firstMarkerPosition = validPositions[0].latlng

    if (mapRef.current) {
      // 맵이 이미 초기화된 경우

      // 기존 오버레이 제거
      overlaysRef.current.forEach(overlay => overlay.setMap(null))
      overlaysRef.current = []

      // 사용자 정의 오버레이 생성 및 추가
      validPositions.forEach(position => {
        const content = `
          <div style="display: flex; flex-direction: column; align-items: center;">
            <div style="display: flex; height: 16px; width: 16px; align-items: center; justify-content: center; border-radius: 50%; border: 1px solid white; background-color: #16a34a;">
              <div style="height: 6px; width: 6px; border-radius: 50%; background-color: white;"></div>
            </div>
            <span style="font-size: 10px">${position.title}</span>
          </div>
        `

        const overlay = new window.kakao.maps.CustomOverlay({
          map: mapRef.current,
          position: position.latlng,
          content: content,
        })

        overlaysRef.current.push(overlay)
      })

      // 지도 범위 재설정
      mapRef.current.setCenter(firstMarkerPosition)
      mapRef.current.setBounds(bounds)
    } else {
      // 맵 초기화
      const options = {
        center: firstMarkerPosition, // 첫 번째 마커의 좌표로 중심 설정
        level: 3, // 필요에 따라 줌 레벨 조정
      }

      mapRef.current = new window.kakao.maps.Map(container, options)
      mapRef.current.setBounds(bounds) // 모든 마커를 포함하도록 지도 범위 설정

      // 사용자 정의 오버레이 생성 및 추가
      validPositions.forEach(position => {
        const content = `
          <div style="display: flex; flex-direction: column; align-items: center;">
            <div style="display: flex; height: 16px; width: 16px; align-items: center; justify-content: center; border-radius: 50%; border: 1px solid white; background-color: #16a34a;">
              <div style="height: 6px; width: 6px; border-radius: 50%; background-color: white;"></div>
            </div>
            <span style="font-size: 10px">${position.title}</span>
          </div>
        `

        const overlay = new window.kakao.maps.CustomOverlay({
          map: mapRef.current,
          position: position.latlng,
          content: content,
        })

        overlaysRef.current.push(overlay)
      })
    }

    // 맵 리사이즈 트리거 (필요 시)
    window.kakao.maps.event.trigger(mapRef.current, 'resize')
  }

  return (
    <div className="w-full">
      <div id="map" className="h-[170px] w-full rounded-[20px]" /> {/* 높이 및 스타일 조정 */}
    </div>
  )
}

export default Map
