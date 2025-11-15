import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/header'
import { BasicInfo } from './components/BasicInfo'
import { PrimaryAttributes } from './components/PrimaryAttributes'
import PriceGrid from './components/PriceGrid'
import ValuesSection from './components/ValueSection'
import FooterActions from './components/FooterActions'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-[90%] mx-auto grid gap-2 py-5'>
        <Header />
        <BasicInfo />
        <PrimaryAttributes />
        <ValuesSection />
        <FooterActions />
      </div>
    </>
  )
}

export default App
