import React from 'react'
import QuandaryLogo from '@assets/QuandaryInverted.png'

const QuandaryIcon: React.FC = () => {
    return (
        <>
            <a href="#" className="flex flex-col items-center no-underline hover:scale-[1.1] hover:transition duration-500 ease-in-out">
                <img src={ QuandaryLogo } alt="Quandary Logo"></img>
                <span className="invisible bottom-[20px] text-transparent">Go to Quandary &rarr;</span>
            </a>
        </>
    )
}

export default QuandaryIcon