import React, { createContext, useState } from 'react'

export interface ContextProps {
    eventHeader: string
    setEventHeader: (header: string) => void
}

export const HeaderContext = createContext<ContextProps>({
    eventHeader: '',
    setEventHeader: () => {}
})


export const HeaderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [eventHeader, setEventHeader] = useState<string>("See you in dreamland.")
    return <HeaderContext.Provider value={{ eventHeader, setEventHeader }}>
        { children }
    </HeaderContext.Provider>
}