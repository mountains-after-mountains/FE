import FooterButton from '@/components/common/button/FooterButton'
import CommonCard from '@/components/common/CommonCard.tsx'
import DayBadge from '@/components/common/DayBadge.tsx'
import CommonSelect from '@/components/common/CommonSelect.tsx'
import { PersonnelOption } from '@/constants/SelectOptions.ts'
import { useState } from 'react'

const Test = () => {
  const [, setPersonnelValue] = useState({ key: '', value: '' })

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2 bg-background">
      <div className="text-h1">Head1</div>
      <div className="text-h2">Head2</div>
      <div className="text-h3">Head3</div>
      <div className="text-h4">Head4</div>
      <div className="text-h5">Head5</div>
      <div className="text-b1 text-main">Main Color Body1</div>
      <div className="text-b2 text-gray-400">Gray-400 Color Body2</div>
      <div className="text-b3 text-success">Success Color Body3</div>
      <FooterButton size="lg">text</FooterButton>
      <FooterButton variant="bright" size="lg">
        text
      </FooterButton>
      <FooterButton disabled={true} size="lg">
        text
      </FooterButton>
      <FooterButton size="sm">text</FooterButton>
      <FooterButton variant="surface" size="sm">
        text
      </FooterButton>
      <CommonCard>카드</CommonCard>
      <DayBadge text="d-day" />
      <CommonSelect
        items={PersonnelOption}
        placeholder="선택해주세요"
        setSelectedValue={setPersonnelValue}
        ariaLabel="공통셀렉트"
      />
    </div>
  )
}

export default Test
