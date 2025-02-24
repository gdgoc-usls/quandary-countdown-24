import React, { useState, useEffect, useContext } from 'react'
import { HeaderContext } from './HeaderContext'

interface TimerSegmentProps {
    time: number;
    label: string;
}

type TimeLeft = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const TimeUnit: React.FC<TimerSegmentProps> = ({time, label}) => {
    return (
        <div className="flex flex-col text-center justify-center items-center m-1">
            <h2 className="font-bold text-white text-5xl">{ time < 10 ? `0${time}` : time }</h2>
            <small className='text-xs text-white'>{ label }</small>
        </div>
    )
    
}

const getNewDate = () => new Date()

const Timer: React.FC = () => {
    const { setEventHeader, setIsVisible } = useContext(HeaderContext)
    // start = November 18 2024 00:00:00, end = November 21 2024 17:00:00
    // Track the time left before, during, and after event
    let start = new Date('November 18 2024 00:00:00'), end = new Date('November 21 2024 17:00:00')

    const calcTimeLeft = (): TimeLeft => {
        const now = getNewDate();
        let target = start
        // Shift target to end if event has started
        if(now >= start) {
            target = end
            setIsVisible(true)
        }

        let diff = target.getTime() - now.getTime()
        // Event is over
        if(now >= end) return { days: 0, hours: 0, minutes: 0, seconds: 0 }

        const totalSeconds = Math.floor(diff / 1000)
        return {
            days: Math.floor(totalSeconds / (24 * 3600)),
            hours: Math.floor(totalSeconds / 3600) % 24,
            minutes: Math.floor(totalSeconds / 60) % 60,
            seconds: totalSeconds % 60
        }
    }

    const [time, setTime] = useState<TimeLeft>(calcTimeLeft())
    
    // Update time every second
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(calcTimeLeft())
        }, 1000)

        return () => clearInterval(timer)
    }, [start])

    // Update header text according to event status/time left
    useEffect(() => {
        if(getNewDate() >= start) {
            Object.values(time).every(timeUnit => timeUnit === 0) ? 
                setEventHeader("Dreamland's gates have gently drifted shut.") :
                setEventHeader("The gates of dreamland are wide open!")
        }
    }, [time])

    return (
        <div className='w-[400px] flex items-center justify-between p-5 scale-[2.5] gap-3 mx-auto gradient-border'>
            { 
                Object.keys(time).map((key, index) => {                
                    const label = key.charAt(0).toUpperCase() + key.slice(1) 
                    return <TimeUnit key={ index } time={ time[key as keyof TimeLeft] } label={ label } />
                })
            }
        </div>
    )
}

export default Timer;