import React, { useState } from 'react';
import './App.css';
import ClockWidget from './widget/ClockWidget';
import WidgetGalleryModal from './modals/WidgetGalleryModal';
import Draggable from 'react-draggable';
import TimerWidget from './widget/TimerWidget';
import CalendarWidget from './widget/CalendarWidget';
 
function App() {
    const [widgets, setWidgets] = useState([
        { id: new Date().getTime(), component: <ClockWidget />, area: 'main-widget', name: "Date and Time" },
        { id: new Date().getTime() + 2, component: <CalendarWidget />, area: 'right-widget', name: "Calendar" },
        { id: new Date().getTime() + 1, component: <TimerWidget />, area: 'left-widget', name:"Timer" },
    ])
    const [showWidgetModal, setShowWidgetModal] = useState(false)
    const [selectedWidgetArea, setSelectedWidgetArea] = useState('')
    
    const removeWidget = (index) => {
        try {
            setWidgets(widgets.filter(widget => widget.id !== index))
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <>
            
        </>
    )
}
 
export default App;