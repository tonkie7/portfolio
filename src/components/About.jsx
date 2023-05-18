import React from 'react'

const About = ({ nightMode }) => {
    return (
        <>
            <div>
                <div
                    className={`flex justify-center mt-16 text-lg md:text-3xl md:justify-start md:mt-14
                ${nightMode ? 'text-stone-400' : 'text-stone-700'}`}>
                    about me.
                </div>
                <div className='flex justify-start'>
                    <p className={`px-16 text-sm mt-2 mb-10 md:px-0 md:mr-32 lg:mr-40
                    ${nightMode ? 'text-stone-300' : 'text-stone-800'}`}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore alias suscipit et quo, optio culpa id quos soluta nesciunt dolor ad asperiores eius saepe ullam. Maiores rem nisi aspernatur cum?
                    </p>
                </div>
            </div>
        </>
    )
}

export default About