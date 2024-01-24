import { useState, useEffect } from "react";
//import styles  from './App.module.css'
import React from "react";
//import { Feadback } from './Feadback/Feadback'
import  Options  from './Options/Options'
import Description  from './Description/Description'
 

const feadback = () => {
    const savedFeedback = window.localStorage.getItem('number-of-feedback');
    if (savedFeedback !== null) {
        return JSON.parse(savedFeedback);
    }
    return {
        good: 0,
        neutral: 0,
        bad: 0,
    };
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
      window.localStorage.setItem('number-of-feedback', JSON.stringify(onClick));
   }, [onClick]);
    return (
        <div>
       
            <Description />
            <Options onButton={onButton}
                onReset={onReset}
            onFeadback={onFeadback}/>
            </div>
    )
}
export default App;