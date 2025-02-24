import React, { useContext }from 'react'
import QuandaryLogo from '@assets/QuandaryInverted.png'
import { HeaderContext } from './HeaderContext'

const QuandaryIcon: React.FC = () => {
    const { isVisible } = useContext(HeaderContext)
    return (
        <>
            <a href={ isVisible ? "#" : "https://gdsc.omsimos.com/"} target={ isVisible ? "_self" : "_blank" } className="absolute top-20 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center no-underline">
                <img src={ QuandaryLogo } alt="Quandary Logo" className={ `${ !isVisible ?  "hover:scale-[1.1] hover:transition duration-500 ease-in-out" : ""}` }></img>
                { isVisible && <span className="bottom-[20px] text-transparent masked-text font-garamond text-lg -mt-4 hover:scale-[1.1] hover:transition duration-500 ease-in-out">Go to Quandary &rarr;</span>}
            </a>
        </>
    )
}

export default QuandaryIcon