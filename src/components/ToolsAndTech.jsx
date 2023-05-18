import React from 'react'
import {
    SiBootstrap,
    SiCss3,
    SiGit,
    SiHtml5,
    SiJavascript,
    SiMongodb,
    SiPostman,
    SiReact,
    SiSwagger,
    SiTailwindcss,
    SiTypescript,
    SiVuedotjs
} from 'react-icons/si'

const ToolsAndTech = ({ nightMode }) => {

    // const skillIconsArr = [
    //     SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiVuedotjs, 
    //     SiTailwindcss, SiPostman, SiBootstrap, SiMongodb, SiGit, SiSwagger
    // ]
    const skillIconsObj = [
        {
            icon: SiHtml5,
            iconHover: 'fill-orange-600'
        },
        {
            icon: SiCss3,
            iconHover: 'fill-blue-700'
        },
        {
            icon: SiJavascript,
            iconHover: 'fill-yellow-400'
        },
        {
            icon: SiTypescript,
            iconHover: 'fill-sky-600'
        },
        {
            icon: SiReact,
            iconHover: 'fill-sky-400'
        },
        {
            icon: SiVuedotjs,
            iconHover: 'fill-emerald-700'
        },
        {
            icon: SiTailwindcss,
            iconHover: 'fill-cyan-500'
        },
        {
            icon: SiPostman,
            iconHover: 'fill-orange-600'
        },
        {
            icon: SiBootstrap,
            iconHover: 'fill-violet-600'
        },
        {
            icon: SiMongodb,
            iconHover: 'fill-green-600'
        },
        {
            icon: SiGit,
            iconHover: 'fill-red-500'
        },
        {
            icon: SiSwagger,
            iconHover: 'fill-lime-600'
        },
    ]

    return (
        <div>
            <div className={`flex justify-center mb-7 text-lg md:text-3xl md:justify-start
            ${nightMode ? 'text-stone-400' : 'text-stone-700'}`}>
                tools and technologies.
            </div>
            <div className={`flex justify-center ${nightMode ? 'text-stone-300' : 'text-stone-700'}`}>
                <div className='grid grid-cols-6 gap-y-4 gap-x-5 md:gap-y-10 md:gap-x-10'>
                    {skillIconsObj.map((Icon, i) => (
                        <div className='text-2xl ml-4 md:text-5xl lg:text-7xl md:ml-7' key={i}>
                            <Icon.icon className={` drop-shadow-md hover:${Icon.iconHover} hover:drop-shadow-lg`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ToolsAndTech