import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import Contents1 from './components/Contents1'
import Contents2 from './components/Contents2'
import Contents3 from './components/Contents3'
import Contents4 from './components/Contents4'
import Contents5 from './components/Contents5'

type Props = {}

const Contents = (_: Props) => {
  const { contentsId } = useParams()

  const contents = useMemo(() => {
    switch (contentsId) {
      case '1':
        return <Contents1 />
      case '2':
        return <Contents2 />
      case '3':
        return <Contents3 />
      case '4':
        return <Contents4 />
      case '5':
        return <Contents5 />
    }
  }, [contentsId])

  return <div>{contents}</div>
}

export default Contents
