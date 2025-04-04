import React,{useState} from 'react'


export default function TextArea(props) {
    const handleUpClick = ()=>{
        // console.log("clicked uppercase" + text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");
    }

    const handleLoClick= ()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","success");
    }

    const handleOnchange = (event)=>{
        // console.log("on change");
        setText(event.target.value)
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(msg);
        
    }

    const [text,setText]=useState("");

    const copy= ()=>{
        var text=document.getElementById('mytext');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard!","success");
    }

    const extraSpace= ()=>{
        let newText= text.split(/[ ]+/); 
        setText(newText.join(" "));
        props.showAlert("Extra spaces are removed!","success");
    }

  return (
    <>
        <div className="container my-2 " style={{color:props.mode==='dark'? 'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="mytext" value={text} onChange={handleOnchange} rows="8" style={{backgroundColor:props.mode==='dark'? '#0c083d':'white',color:props.mode==='dark'? 'white':'black'}}></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to lowercase</button>
            <button type="submit" onClick={speak} className="btn btn-primary mx-1" id="toggle">Speak</button>
            <button className="btn btn-primary mx-1" onClick={copy}>Copy</button>
            <button className="btn btn-primary mx-1" onClick={extraSpace}>Remove Extra Space</button>
        </div>
        <div className="container my-3 " style={{color:props.mode==='dark'? 'white':'black'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008* text.split(" ").length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div>
    </>
    
  )
}
