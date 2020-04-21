import React,{useEffect,useState} from "react";
import axios from 'axios'
const MyCourse =()=>{ 
 const [courseInfo,setCourseInfo]=useState(null)
 console.log("courseInfo",courseInfo);
    useEffect(()=>{
axios.get(`http://localhost:3005/api/course/${this.props.match.params.id}`,)
.then(result=>console.log(result) ||setCourseInfo(result.data.course ) )
    },[])
return (
<div>{courseInfo ==null?<p>Loding</p>:courseInfo.map(item=><div style={{display:"flex",alignItems: "center",
justifyItems: "center"}}> 
    <div><h1>{item.courseName}</h1><p>{item.description}</p></div>
    </div>)}</div>);

}

export default MyCourse ;