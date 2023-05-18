import React from 'react'

const PortfolioItem = ({ title, stack, imgUrl, projectUrl, id, nightMode }) => {
    return (
        <>
            <div className={`flex flex-col border-2 pb-2 rounded-sm overflow-hidden
            ${nightMode ? 'border-stone-500 text-stone-300' : 'border-stone-700 text-stone-700'}`}>
                <img className='w-full h-36 md:h-48 object-cover' src={imgUrl} alt="" />
                <div className='ml-2 my-1.5'>
                    <div className='text-lg md:text-xl mb-2 
                    md:mb-3 font-semibold'>{title}</div>
                    <div className='flex flex-wrap gap-2 flex-row items-center 
                    justify-start text-xs md:text-sm'>
                        {stack.map((item, i) => (
                            <span className={`inline-block mr-1 border-2 rounded-md
                              p-1 ${nightMode ? '' : 'border-stone-700'}`} key={i}>
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default PortfolioItem