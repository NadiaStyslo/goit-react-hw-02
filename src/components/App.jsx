import { useState, useEffect } from "react";
//import styles  from './App.module.css'
import React from "react";
import Feedback from "./Feedback/Feedback";
import  Options  from './Options/Options'
import Description  from './Description/Description'
 

const feadback = () => {
    const savedFeadback = window.localStorage.getItem('number');
    if (savedFeadback !== null) {
        return JSON.parse(savedFeadback);
    }
    return {
        good: 0,
        neutral: 0,
        bad: 0,
    
    }
};

const App = () => {
    const [onClick, setCount]=useState(feadback)
    const onButton= type => {
      setCount(prevCount => ({
         ...prevCount,
         [type]: prevCount[type] + 1,
      }));
    };
    
    const onReset = () => {
      setCount({
         good: 0,
         neutral: 0,
         bad: 0,
      });
    };
    const onFeadback = onClick.good + onClick.neutral + onClick.bad;
      useEffect(() => {
      window.localStorage.setItem('number', JSON.stringify(onClick));
   }, [onClick]);
    return (
        <div>
       
            <Description />
            <Options onButton={onButton}
                onReset={onReset}
                onFeadback={onFeadback} />
            
                <Feedback number={onClick} /> 
            
      
            </div>
    )
}
export default App;