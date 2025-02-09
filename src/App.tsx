import { Footer, QuandaryIcon, Timer } from '@components/Component'
import { HeaderProvider, HeaderContext } from '@components/HeaderContext'
import { useContext } from 'react'

function App() {
  const { header } = useContext(HeaderContext)
  return (
    <>
      <HeaderProvider>
        <QuandaryIcon />
        <h3 className="text-center text-5xl font-bold font-garamond">{ header }</h3>
        <Timer />
        <Footer />
      </HeaderProvider>
    </>
  )
}

export default App
