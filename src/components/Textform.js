import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpClick =()=>{
       // console.log("click is forced");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Uppercase is applied","success");
    }
    const handleLowClick =()=>{
        //console.log("click is forced");
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Lowercase is applied","success");
    }
    const handleOnChange =(event)=>{
        console.log("onChange is forcved");
        setText(event.target.value);
    }
    const [text, setText] = useState('enter text here');
  return (
    <div>
      
        <div className="mb-3">
        <label htmlFor="myText" className="form-label">{props.heading}</label>
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode=== 'dark'? 'grey':'white' , color:props.mode=== 'dark'? 'white':'black' }} id="myText" rows="8"></textarea>
        <button className="btn btn-primary m-3" onClick={handleUpClick}>convert uppercase</button>
        <button className="btn btn-primary m-3" onClick={handleLowClick}>convert lowercase</button>
        </div>
        <div className="container my-3">
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words are there and {text.length} characteres</p>
        </div>
    </div>
  )
}
