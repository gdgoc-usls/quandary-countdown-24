import React, { createContext, useState } from 'react'

export interface ContextProps {
    eventHeader: string
    setEventHeader: (header: string) => void
    isVisible: boolean
    setIsVisible: (visible: boolean) => void
}

export const HeaderContext = createContext<ContextProps>({
    eventHeader: '',
    setEventHeader: () => {},
    isVisible: false,
    setIsVisible: () => {}
})

export const HeaderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [eventHeader, setEventHeader] = useState<string>("See you in dreamland.")
    const [isVisible, setIsVisible] = useState<boolean>(false)

    return <HeaderContext.Provider value={{ eventHeader, setEventHeader, isVisible, setIsVisible }}>
        { children }
    </HeaderContext.Provider>
}