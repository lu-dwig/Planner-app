import React, { useEffect, useState } from 'react'
 
export default function TimerWidget() {
    const [timerListData, setTimerListData] = useState({
        time: 0,
        isRunning: false,
    })
  
    const tidyTime = (time) => {
        let hours = Math.floor(time / 3600)
        let minutes = Math.floor((time - (hours * 3600)) / 60)
        let seconds = time - (hours * 3600) - (minutes * 60)
        
        if (hours < 10) { hours = "0" + hours }
        if (minutes < 10) { minutes = "0" + minutes }
        if (seconds < 10) { seconds = "0" + seconds }
        
        return hours + ':' + minutes + ':' + seconds
    }
  
    useEffect(() => {
        // timer logic
        let interval = null
        if (timerListData.isRunning && timerListData.time > 0) {
            interval = setInterval(() => {
              setTimerListData({
                ...timerListData,
                time: parseInt(timerListData.time) - 1,
              })
            }, 1000)
        }else if (!timerListData.isRunning && timerListData.time !== 0) {
            setTimerListData({
                ...timerListData,
                isRunning: false,
            })
            clearInterval(interval)
        } else if (timerListData.isRunning && timerListData.time === 0) {
            setTimerListData({
                ...timerListData,
                isRunning: false,
            })
            clearInterval(interval)
            alert('Timer is up!')
        }
      
            return () => clearInterval(interval)
    },[timerListData, timerListData.isRunning, timerListData.time])
  
}