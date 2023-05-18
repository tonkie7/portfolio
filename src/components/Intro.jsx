import React from 'react'
import logo from '../images/logo.PNG'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
// import { SiCss3, SiHtml5, SiJavascript, SiReact, SiTailwindcss, SiTypescript, SiVuedotjs } from 'react-icons/si'


const Intro = ({ nightMode }) => {

    // const skillIconsArr = [SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiVuedotjs, SiTailwindcss]
    console.log(nightMode);
    return (
        <>
            <div className={`flex justify-center items-center ${nightMode ? 'text-stone-300' : 'text-stone-700'}`}>
                <div>
                    <p className={`text-xl md:text-5xl`}>tuan dang
                        <span className='block text-lg mt-0.5 md:text-3xl'>frontend web developer</span>
                    </p>
                    <div className='flex mt-2 items-center'>
                        <button
                            className={`border border-stone-700 rounded-sm py-1 px-3 text-xs mr-2 md:text-lg
                            ${nightMode ? 'bg-stone-400 text-stone-200 hover:bg-stone-300 hover:text-stone-700' : 'hover:bg-stone-500 hover:text-stone-300'}
                            `}>
                            contact me
                        </button>
                        <a className='mr-2 md:text-2xl' href=""><BsGithub className='hover:fill-slate-100' /></a>
                        <a className='md:text-2xl' href="https://www.linkedin.com/in/tuan-dangfe/"><BsLinkedin className='hover:fill-sky-600' /></a>
                    </div>
                </div>
                <div className='sm:block w-40 md:w-80'><img src={logo} alt="" /></div>
            </div>
            {/* <div className='border p-2 max-w-sm m-auto flex justify-center'>
                {skillIconsArr.map((Icon, i) => (
                    <div className='text-3xl ml-2' key={i}>
                        <Icon />
                    </div>
                ))}
            </div> */}
        </>
    )
}

export default Intro