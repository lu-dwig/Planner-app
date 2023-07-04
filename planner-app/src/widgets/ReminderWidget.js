import React, { useEffect, useState } from 'react'
 
export default function ReminderListWidget() {
    const [reminderListData, setReminderListData] = useState()
    
    useEffect(() => {
        let reminderList = JSON.parse(localStorage.getItem('reminderList')) || []
        if (!reminderList || reminderList === "undefined") {
            reminderList = []
        }
        setReminderListData(reminderList)
    }, [])
  
    useEffect(() => {
        if (!reminderListData) {
            return
        }
        localStorage.setItem('reminderList', JSON.stringify(reminderListData))
    }, [reminderListData])
 
     
}   