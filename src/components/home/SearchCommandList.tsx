import Search from '@/assets/icons/search.svg?react'

type Props = {
  data: string[]
  onClick: (item: string) => void
}

const SearchCommandList = ({ data, onClick }: Props) => {
  return (
    <div
      className={`absolute top-[32px] my-5 box-border w-[calc(100%-40px)] transform rounded-lg border border-gray-200 bg-white transition-all duration-300 ease-in-out ${
        data.length > 0 ? 'scale-100 opacity-100' : 'pointer-events-none scale-95 opacity-0'
      }`}
    >
      {data?.map((item, index) => (
        <div
          key={index}
          className={`box-border flex w-full gap-3 ${data.length - 1 === index ? 'rounded-b-lg' : 'border-b'} ${index === 0 && 'rounded-t-lg'} cursor-pointer border-gray-200 p-2 align-middle hover:bg-gray-200`}
          onClick={() => onClick(item)}
        >
          <Search />
          <div className="text-b2">{item}</div>
        </div>
      ))}
    </div>
  )
}

export default SearchCommandList
