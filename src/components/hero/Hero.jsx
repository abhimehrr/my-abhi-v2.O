export default function Hero({ heroRef }) {
    return (
        <div ref={heroRef} className='min-h-screen min-w-screen relative bg-gray-100 flex items-center justify-center cursor-pointer'>
            <div className='text-center bg-white text-gray-500 px-8 py-4 rounded-xl z-10'>
                <h1 className='text-4xl sm:text-8xl font-bold'>ABHISHEK</h1>
                <p className='text-md sm:text-xl font-medium text-purple-300 mb-2'>
                    I'm, a MERN Stack Developer
                </p>
            </div>
            <div className="absolute bottom-0 opacity-70 z-0">
                <div className="mix-blend-multiply animation-delay-2000 animate-blob absolute bottom-2 -left-8 w-96 h-96 min-[400px]:w-64 min-[400px]:h-64 min-[250px]:w-52 min-[250px]:h-52 filter blur-2xl bg-purple-300 rounded-full"></div>
                <div className="mix-blend-multiply animation-delay-4000 animate-blob absolute bottom-2 -right-12 w-96 h-96 min-[400px]:w-64 min-[400px]:h-64 min-[250px]:w-52 min-[250px]:h-52 filter blur-2xl bg-yellow-300 rounded-full"></div>
                <div className="mix-blend-multiply animate-blob absolute bottom-48 -left-36 w-96 h-96 min-[400px]:w-64 min-[400px]:h-64 min-[250px]:w-52 min-[250px]:h-52 filter blur-2xl bg-pink-300 rounded-full"></div>
            </div>
            <div className="absolute bottom-4 bg-whites px-4 py-1 text-gray-700 font-medium tracking-wider transition-all animate-scroll rounded-md">
                Scroll Down
            </div>
        </div>
    )
}