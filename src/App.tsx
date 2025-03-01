import { Footer, QuandaryIcon, Timer } from '@components/Component'
import { HeaderProvider, HeaderContext, ContextProps } from '@components/HeaderContext'
import { useContext } from 'react'

const Main: React.FC = () => {
  const { eventHeader } = useContext<ContextProps>(HeaderContext)
  return (
    <>
      <QuandaryIcon />
      <h3 className="absolute xs:w-5/6 sm:w-auto top-[20%] p-4 left-1/2 -translate-x-1/2 text-center md:text-5xl xs:text-[2rem] text-transparent font-garamond masked-text">{ eventHeader }</h3>
      <Timer />
      <Footer />
    </>
  )
}

function App() {
  return (
    <>
      <HeaderProvider>
        <Main />
      </HeaderProvider>
    </>
  )
}

export default App
