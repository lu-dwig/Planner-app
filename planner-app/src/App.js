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
            {showWidgetModal && <WidgetGalleryModal setShowWidgetModal={setShowWidgetModal} selectedWidgetArea={selectedWidgetArea} widgets={widgets} setWidgets={setWidgets} />}
            <div className="add-button"
                onClick={() => {
                    console.log('add button clicked')
                    setShowWidgetModal(true)
                    setSelectedWidgetArea('none-widget')
                }}
            >
                <p
                    className='add-widget-button'
                    style={{ background: "none", border: "none", color: "black", fontSize: "30px", cursor: "pointer", backgroundColor: "white", borderRadius: "50%", width: "50px", display: "flex", justifyContent: "center", alignItems: "center", height: "50px", position: "fixed", bottom: "10px", right: "10px" }}
                >+</p>
            </div>
            
        </>
    )
}
 
export default App;