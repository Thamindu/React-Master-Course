// render fallback ui
export default function MovieDetailsLoading() {
  return (
    <div className="flex flex-col items-center justify-center py-8 min-h-screen">
        <div className="animate-spin rounded-full border-4 border-gray-200 border-t-blue-500 h-12 w-12 mb-4"></div>
        <div className="text-lg text-gray-600">Loading Movie Details... </div>
    </div>
  )
}
