import React, { useEffect, useState } from "react";
import Course from "./Course";



const Allcourses = () => {
    useEffect(()=>{
        document.title="All courses";
    },[]);
    // eslint-disable-next-line
    const [courses, setCourses] = useState([
        {title:"shyam course",description:"this is java course"},
        {title:"Django course",description:"this is demo course"},
        {title:"Reactjs course",description:"this is ractjs course"},
    ])
    return (
        <div>
            <h1>All courses</h1>
            <p>List of all courses are as follows</p>
            {
                courses.length>0? courses.map((item, index)=><Course key={index} course={item}/>):"No courses found"
            }
        </div>
    );
};
export default Allcourses;