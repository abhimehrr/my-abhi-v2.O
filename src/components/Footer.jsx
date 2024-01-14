export default function Footer() {
  return (
    <footer className='relative overflow-hidden w-screen py-5 flex items-center justify-center bg-gray-200'>
      <div className="absolute animate-footer-ani top-0 w-20 h-20 opacity-40 mix-blend-multiply blur-lg bg-yellow-500 rounded-full"></div>
      <div className="absolute animate-footer-ani animation-delay-2000 top-0 w-20 h-20 opacity-40 mix-blend-multiply blur-lg bg-purple-500 rounded-full"></div>
      <div className="absolute animate-footer-ani animation-delay-4000 top-0 w-20 h-20 opacity-40 mix-blend-multiply blur-lg bg-pink-500 rounded-full"></div>

      <div className="relative bg-white text-gray-800 inline-block px-8 py-2 rounded-lg cursor-pointer">
        &copy; {new Date().getFullYear()} <span className="font-bold text-purple-600">Abhishek</span>
      </div>
    </footer>
  )
}