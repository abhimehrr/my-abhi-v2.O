import React, { useState } from 'react'

export default function ImageSlider({ images }) {
    const [imageIndex, setImageIndex] = useState(0)
    
    return (
        <div className="relative flex justify-center gap-8 max-sm:flex-col-reverse">
            <div className="relative w-[150px] h-[450px] max-sm:h-28 max-sm:w-full sm:pr-2 max-sm:pb-2 flex sm:flex-col gap-3 overflow-auto rounded-lg">
                {images.map((s, i) => (
                    <img onClick={() => setImageIndex(i)} key={i} src={s} alt="project-image" className={`sm:w-34 max-sm:w-24 aspect-square border-2 ${i === imageIndex ? 'border-gray-100 opacity-100' : 'border-gray-500 opacity-50'} rounded-md object-cover cursor-pointer`} />
                ))}
            </div>

            <div className="w-[650px] h-[450px] flex relative max-sm:w-full max-sm:px-1 max-sm:h-96 bg-slate-800 rounded-lg overflow-hiddens">
                <div className='w-full h-full absolute bg-purple-600 blur inset-0 max-sm:opacity-40 opacity-70'></div>
                <div className="relative flex w-full h-full p-0.5 rounded-lg overflow-hidden">
                    {images.map((s, i) => (
                        <img key={i} src={s} alt="project-image" className={`relative w-full h-full shrink-0 grow-0 object-contain bg-slate-900 rounded-lg border-4-gray-300bg-whitep-1 transition-all ease-in-out`} style={{ translate: `${-100 * imageIndex}%`}} />
                    ))}
                </div>
                <div className="w-full px-4 absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-between gap-2">
                    <button onClick={() => setImageIndex(index => index === 0 ? images.length - 1 :  index - 1)} className="w-8 h-8 bg-gray-100 group rounded-full">
                        <i className="fa-solid fa-angles-left text-gray-900 group-hover:-translate-x-0.5 transition-all"></i>
                    </button>
                    <div className="flex items-center gap-2">
                        {images.map((_, i) => (
                            <button key={i} onClick={() => setImageIndex(i)} className={`bg-gray-100 ${i === imageIndex ? 'w-3 h-3' : 'w-2 h-2'} hover:w-3 hover:h-3 hover:bg-gray-400 border border-gray-800 rounded-full transition-all`}></button>
                        ))}
                    </div>
                    <button onClick={() => setImageIndex(index => index === images.length - 1 ? 0 : index + 1)} className="w-8 h-8 bg-gray-100 group rounded-full">
                        <i className="fa-solid fa-angles-right text-gray-900 group-hover:translate-x-0.5 transition-all"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}