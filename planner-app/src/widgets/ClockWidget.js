import React, { useEffect, useState } from 'react'
 
export default function ClockWidget() {
    const [time, setTime] = useState(new Date().toLocaleTimeString())
    const [date, setDate] = useState(new Date())
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString())
            setDate(new Date())
        }, 1000)
        return () => clearInterval(interval)
    }, [])
    
    
}

