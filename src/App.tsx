import { Footer, QuandaryIcon, Timer } from '@components/Component'
import { HeaderProvider, HeaderContext, ContextProps } from '@components/HeaderContext'
import { useContext } from 'react'

const Main: React.FC = () => {
  const { eventHeader } = useContext<ContextProps>(HeaderContext)
  console.log(eventHeader)
  return <>
    <QuandaryIcon />
    <h3 className="text-center text-5xl font-bold font-garamond">{ eventHeader }</h3>
    <Timer />
    <Footer />
  </>
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
