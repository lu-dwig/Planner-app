import React, { useState } from 'react'
import ClockWidget from '../widgets/ClockWidget'
import ReminderListWidget from '../widgets/ReminderListWidget'
import TimerWidget from '../widgets/TimerWidget'
import CalendarWidget from '../widgets/CalendarWidget'

export default function WidgetGalleryModal({ setShowWidgetModal, selectedWidgetArea, widgets, setWidgets }) {
    const [galleryWidgets, setGalleryWidgets] = useState([
        { component: <ClockWidget />, name: "Date and Time" },
        { component: <ReminderListWidget />, name: "Reminder List" },
        { component: <TimerWidget />, name: "Timer" },
        { component: <CalendarWidget />, name: "Calendar" },
    ])
    
}