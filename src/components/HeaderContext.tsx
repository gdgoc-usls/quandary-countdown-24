import React, { createContext, useState } from 'react'

export interface ContextProps {
    header: string
    setHeader: (header: string) => void
}

export const HeaderContext = createContext<ContextProps>({
    header: '',
    setHeader: () => {}
})

export const HeaderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [header, setHeader] = useState<string>("See you in dreamland.");
    
    return <HeaderContext.Provider value={{ header, setHeader }}>
        { children }
    </HeaderContext.Provider>
}