import { PropsWithChildren, useEffect, useRef } from 'react'
import Mountains from '@/assets/icons/mountains.svg?react'
import Instagram from '@/assets/icons/logo_instagram.svg?react'
import useScrollStore from '@/store/useScrollStore'

const Layout = ({ children }: PropsWithChildren) => {
  const { isScrolling, setScrollY } = useScrollStore()

  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isScrolling) {
      mainRef?.current?.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [isScrolling])

  useEffect(() => {
    const handleScroll = () => setScrollY(mainRef?.current?.scrollTop ?? 0)

    mainRef.current?.addEventListener('scroll', handleScroll)
    return () => {
      mainRef.current?.removeEventListener('scroll', handleScroll)
    }
  }, [setScrollY])

  return (
    <div className="scrollbar-hide flex h-screen justify-center bg-[#0E9F59] bg-opacity-20">
      {/* 좌측 고정된 영역 */}
      <section className="flex h-full w-[calc((100%-550px)*0.78)] flex-col items-center justify-center p-4 max-[1023px]:hidden">
        <div className="mb-3.5 text-center text-h1 text-[#10854D]">친구야, 산 넘자!</div>
        <div className="flex gap-7">
          <div className="flex min-h-[83px] min-w-[83px] items-center justify-center rounded-[23.72px] bg-white">
            <Mountains width={58} height={58} />
          </div>
          <h1 className="text-center text-[56px] font-bold text-green-600">산너머산</h1>
        </div>
        <div className="fixed bottom-5 flex flex-col items-center gap-1">
          <Instagram />
          <div className="text-b2 text-gray-700">이메일 overthemnt.san@gmail.com</div>
          <div className="flex items-center gap-3 text-b2 text-gray-700 underline">
            <span>개인정보처리방침</span>
            <span>이용약관</span>
          </div>
        </div>
      </section>

      {/* 메인 콘텐츠 영역 */}
      <div className="scrollbar-hide overflow-y-auto min-[1024px]:mr-[calc((100%-550px)*0.2)]" ref={mainRef}>
        <div className="mx-auto min-h-screen max-w-[550px] bg-white shadow-lg max-[549px]:[&>*>div]:w-[100vw] min-[550px]:[&>div>div]:min-w-[550px]">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout
