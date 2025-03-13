import React, { useContext }from 'react'
import QuandaryLogo from '@assets/QuandaryInverted.png'
import { HeaderContext } from './HeaderContext'

const QuandaryIcon: React.FC = () => {
    const { isVisible } = useContext(HeaderContext)
    return (
        <>
            <a href={ isVisible ? "https://quandary-eta.vercel.app/" : "https://gdsc.omsimos.com/"} target={ isVisible ? "_self" : "_blank" } className="absolute md:top-22 xs:top-17 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center no-underline">
                <img src={ QuandaryLogo } alt="Quandary Logo" className="hover:scale-110 duration-500 ease-in-out xs:scale-80 sm:scale-100"/>
                { isVisible && <span className="xs:scale-80 sm:scale-100 bottom-[20px] text-transparent masked-text font-garamond text-2xl xs:-mt-9 md:-mt-4 hover:translate-x-4 duration-500 ease-in-out">Go to Quandary &rarr;</span>}
            </a>
        </>
    )
}

export default QuandaryIcon