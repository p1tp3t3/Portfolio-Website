const Reload = ({ loading }) => {

  if(loading) document.body.style.overflow = 'hidden'
  else document.body.style.overflow = 'auto'
  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center bg-black z-50 transition-opacity duration-700 ${
        loading ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Spinner */}
      <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      {/* Loading text */}
      <span className="mt-4 text-blue-500 text-lg font-semibold">Loading...</span>
    </div>
  );
}

export default Reload