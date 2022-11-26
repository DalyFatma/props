import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Bio(props) {
const myStyle={color:"#EB1D36" , fontSize:"1.2rem",margin:"7px",fontWeight:"bold"};
  return (
        <div >
            <div >
            <h2  style={{margin:"10px"}}>{props.title}</h2>
            <span style = {myStyle}>Age:</span> {props.Age} <br/>
            <span style= {myStyle}>Gender:</span>{props.Gender}<br/>
            <span style= {myStyle}>Interests:</span>{props.Interests}<br/>
            <span style= {myStyle}>Bio:</span>I'm {props.fullName}, i'm {props.Age} years old and i like {props.Interests}
            </div>
        </div>
    )
  
}

export default Bio