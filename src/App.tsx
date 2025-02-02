import { Footer, QuandaryIcon, Timer } from '@components/Component'

function App() {
  let targetDate = new Date('November 21 2024 17:00:00')
  return (
    <>
      <QuandaryIcon />
      <h3 className="text-center text-white text-5xl font-bold">Hello World!</h3>
      <Timer target={targetDate} />
      <Footer />
    </>
  )
}

export default App
