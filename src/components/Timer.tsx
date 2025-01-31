import React from 'react'
const TimerSegment: React.FC = () => {
    return (
        <div>
            <h2></h2>
            <small></small>
        </div>
    )
    
}

const Timer: React.FC = () => {
    return (
        <div>
            <TimerSegment />
        </div>
    )
}

export default { Timer };