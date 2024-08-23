import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import OnboardingContent from '@/pages/login/components/OnboardingContent.tsx'
import { useEffect } from 'react'

type DataType = {
  id: number
  img: string
  text: string
}

type PropType = {
  data: DataType[]
  options?: EmblaOptionsType
}

const CustomCarousel = (props: PropType) => {
  const { data, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  useEffect(() => {
    if (emblaApi) {
      const onSelect = () => {}
      emblaApi.on('select', onSelect)
      onSelect()
    }
  }, [emblaApi, data])

  return (
    <div className="max-w-[500px]">
      <div className="overflow-hidden px-10" ref={emblaRef}>
        <div className="flex gap-5">
          {data.map(item => (
            <div className="w-full flex-shrink-0" key={item.id}>
              <OnboardingContent key={item.id} img={item.img} text={item.text} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CustomCarousel
