import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import Contents1 from './components/Contents1'

type Props = {}

const Contents = (_: Props) => {
  const { contentsId } = useParams()

  const contents = useMemo(() => {
    switch (contentsId) {
      case '1':
        return <Contents1 />
      case '2':
        return <></>
      case '3':
        return <></>
      case '4':
        return <></>
      case '5':
        return <></>
    }
  }, [contentsId])

  return <div>{contents}</div>
}

export default Contents
