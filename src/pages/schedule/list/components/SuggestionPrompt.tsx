import { useNavigate } from 'react-router-dom'
import { MOUNTAIN_LIST_IMAGE, PROMPT_TEXTS } from '@/constants/suggestionPromptConstants.tsx'

const SuggestionPrompt = () => {
  const navigate = useNavigate()

  return (
    <div className="flex h-[calc(100vh-200px)] w-full flex-col items-center justify-center">
      <img alt={PROMPT_TEXTS.altText} src={MOUNTAIN_LIST_IMAGE} />
      <div className="mb-2 mt-5 text-h5 text-green-950">{PROMPT_TEXTS.title}</div>
      <div className="mb-4 text-center text-b2 text-gray-600">{PROMPT_TEXTS.description}</div>
      <button
        className="rounded-[32px] border-[1px] border-border bg-white px-3 py-2 text-b2"
        onClick={() => navigate('/home')}
      >
        {PROMPT_TEXTS.buttonText}
      </button>
    </div>
  )
}

export default SuggestionPrompt
