import React, { useState, useEffect } from 'react'

interface TimerSegmentProps {
    time: number;
    label: string;
}

type TimeLeft = {
    days: number | 0;
    hours: number | 0;
    minutes: number | 0;
    seconds: number | 0;
}

const TimeUnit: React.FC<TimerSegmentProps> = ({time, label}) => {
    return (
        <div className="flex flex-col text-center justify-center items-center m-1">
            <h2 className="font-bold text-white text-4xl">{ time < 10 ? `0${time}` : time }</h2>
            <small className='text-xs text-white'>{ label }</small>
        </div>
    )
    
}

const Timer: React.FC<{ target: Date }> = ({ target }) => {
    const calcTimeLeft = () => {
        const diff: number = target.getTime() - new Date().getTime()
        const totalSeconds: number = Math.floor(diff / 1000)
        const timeLeft: TimeLeft  = {
            days: (diff > 0) ? Math.floor(totalSeconds / (24 * 3600)) : 0,
            hours: (diff > 0) ? Math.floor(totalSeconds / 3600) % 24 : 0,
            minutes: (diff > 0) ? Math.floor(totalSeconds / 60) % 60 : 0,
            seconds: (diff > 0) ? totalSeconds % 60 : 0
        }
        return timeLeft;
    }

    const [time, setTime] = useState<TimeLeft>(calcTimeLeft())
    const timerLabel: string[] = ['Days', 'Hours', 'Minutes', 'Seconds']
    
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(calcTimeLeft())
        }, 1000)

        return () => clearInterval(timer)
    }, [target])

    return (
        <div className='w-[400px] flex items-center justify-center p-[5px] scale-[2.5] gap-3'>
            { 
                Object.keys(time).map((key, index) => <TimeUnit key={index} time={time[key as keyof TimeLeft]} label={timerLabel[index]} />)
            }
        </div>
    )
}

export default Timer;