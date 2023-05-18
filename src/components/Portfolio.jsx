import React from 'react'
import PortfolioItem from './PortfolioItem'
import portfolio from '../data/portfolio'

const Portfolio = ({nightMode}) => {
    return (
        <>
            <div className={`flex justify-center mt-10 mb-7 text-lg md:text-3xl md:justify-start md:mt-14
            ${nightMode ? 'text-stone-400' : 'text-stone-700'}`}>
                projects.
            </div>
            <div className='flex flex-col md:flex-row 
                items-center justify-center mb-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {portfolio.map(project => (
                        <PortfolioItem
                            // id={project.id}
                            nightMode={nightMode}
                            key={project.id}
                            title={project.title}
                            stack={project.stack}
                            imgUrl={project.imgUrl}
                            projectUrl={project.projectUrl}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Portfolio