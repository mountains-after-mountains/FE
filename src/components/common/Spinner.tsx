const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-75">
      <div className="h-6 w-6 animate-spin rounded-full border-4 border-solid border-green-600 border-t-transparent"></div>
    </div>
  )
}

export default LoadingSpinner
