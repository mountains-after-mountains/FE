import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import OnboardingContent from '@/pages/login/components/OnboardingContent.tsx'

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
  const [emblaRef] = useEmblaCarousel(options)

  return (
    <div className="max-w-[500px]">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {data.map(item => (
            <div className="w-2/3 flex-shrink-0 pl-5" key={item.id}>
              <OnboardingContent key={item.id} img={item.img} text={item.text} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CustomCarousel
