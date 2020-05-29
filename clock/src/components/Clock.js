import React, { useEffect, useState } from 'react';
import './clock.scss'

function Second(props) {
    const currentHand = (360/60) * props.number;
    document.documentElement.style.setProperty('--rotate-second', `${currentHand}deg`);
    return <div className="clock__hand clock__hand--second" data-date={currentHand}></div>
}

function Minute(props) {
    const currentHand = (360/60) * props.number;
    document.documentElement.style.setProperty('--rotate-minute', `${currentHand}deg`);
    return <div className="clock__hand clock__hand--minute" data-date={props.number}></div>
}

function Hour(props) {
    const currentHand = (360/12) * props.number;
    document.documentElement.style.setProperty('--rotate-hour', `${currentHand}deg`);
    return <div className="clock__hand clock__hand--hour" data-date={props.number}></div>
}

function Digital(props) {
    const currentTime = `${props.time.hour}:${props.time.minute}:${props.time.second}`;
return <div className="clock-digital">{currentTime}</div>
}

const Clock = () => {
    const date = new Date();
    const [time, setTime] = useState({
        hour : date.getHours(),
        minute : date.getMinutes(),
        second: date.getSeconds()
    })    

    useEffect(() => {
        setInterval(() => {
            const d = new Date();
            setTime({
                hour : d.getHours(),
                minute : d.getMinutes(),
                second: d.getSeconds()
            });
        }, 1000);

    },[]);

    return (
        <>
            <div className="clock">
                <Hour number={time.hour} />
                <Minute number={time.minute}/>
                <Second number={time.second}/>        
            </div>
            <Digital time={time}/>
        </>
    )
}

export default Clock;