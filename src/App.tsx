import { Footer, QuandaryIcon, Timer } from '@components/Component'
import { HeaderProvider, HeaderContext, ContextProps } from '@components/HeaderContext'
import { useContext } from 'react'

const Main: React.FC = () => {
  const { eventHeader } = useContext<ContextProps>(HeaderContext)
  return (
    <>
      <QuandaryIcon />
      <h3 className="text-center text-5xl font-semibold text-white font-garamond masked-text">{ eventHeader }</h3>
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
