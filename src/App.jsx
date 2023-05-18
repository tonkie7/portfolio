import { useState } from 'react'
import NavBar from './components/NavBar'
import Intro from './components/Intro'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Footer from './components/Footer'
import Contact from './components/Contact'
import ToolsAndTech from './components/ToolsAndTech'

function App() {

  const [nightMode, setNightMode] = useState(false)
  const handleNightMode = () => {
      setNightMode(!nightMode)
  }
 
  return (
    <>
      <div className={`px-8 pt-7 md:px-12 ${nightMode ? 'bg-stone-600' : 'bg-stone-300'}`}>
        <div>
          <NavBar handleNightMode={handleNightMode} nightMode={nightMode} />
          <Intro nightMode={nightMode} />
        </div>
      </div>
      <div className={`flex flex-col md:px-44 ${nightMode ? 'bg-stone-700' : 'bg-stone-400'}`}>
          <About nightMode={nightMode}  />
          <ToolsAndTech nightMode={nightMode} />
          <Portfolio nightMode={nightMode} />
      </div>
      {/* <hr className='mb-10'/> */}
          {/* <Contact /> */}
          {/* <Footer /> */}
    </>
  )
}

export default App
