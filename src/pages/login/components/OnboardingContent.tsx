interface OnboardingContentProps {
  img: string
  text: string
}

const OnboardingContent = ({ img, text }: OnboardingContentProps) => {
  return (
    <div className="h-[344px] overflow-hidden rounded-2xl">
      <div className="flex h-4/5 justify-center bg-gray-100">
        <img src={img} alt="Onboarding image" />
      </div>
      <div
        className="flex h-1/5 items-center justify-center bg-white text-center text-b2 font-semibold"
        style={{ whiteSpace: 'pre-line' }}
      >
        {text}
      </div>
    </div>
  )
}

export default OnboardingContent
