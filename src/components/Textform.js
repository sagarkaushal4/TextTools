import React, {useState} from 'react'


export default function Textform(props) {
    const handleUpClick = ()=>{
        // console.log("uppercase was clicked!" + text);
        let newText =text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase !", "success");
    }
    const handleLoClick = ()=>{
      // console.log("uppercase was clicked!" + text);
      let newText =text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to lowercase !", "success");
    }

    const handleClrClick = ()=>{
      // console.log("uppercase was clicked!" + text);
      let newText ="";
      setText(newText);
      props.showAlert("Text cleared! ", "success");
    }

    const handleCopyClick = () => {
      navigator.clipboard.writeText(text)
      props.showAlert("Text copied! ", "success");
          
    }

    const handleExtraSpace = () => {
      let newText = text.split(/[ ] + /);
      setText(newText.join(" "));
      props.showAlert("Extra space removed! ", "success");
    }
    
    // const handleLightTheme = () => {
    //   document.querySelector('.body').style.backgroundColor = "white"
    // }

    // const handleDarkTheme = () => {
    //   document.querySelector('.body').style.backgroundColor = "black"
    //   document.querySelector('.body').style.color = "white"
      
    // }

    const handleOnChange = (event)=>{
      // console.log("on chnage");
      setText(event.target.value);
    }

    const [text, setText] = useState('Enter Text Here');
    // text="newtext";   //wrong way to change the state
    // setText("adfgkmgkgg");  //correct way to change the state
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark' ? 'black':'white', color:props.mode==='light' ? 'black':'white', fontSize:18}} id="mybox" rows="10"></textarea>
        </div>
        <button className="btn btn-danger mx-2 my-2" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-danger mx-2 my-2" onClick={handleLoClick}>Convert to lowercase</button>
        <button className="btn btn-danger mx-2 my-2" onClick={handleClrClick}>Clear text</button>
        <button className="btn btn-danger mx-2 my-2" onClick={handleCopyClick}>Copy to clipboard</button>
        <button className="btn btn-danger mx-2 my-2" onClick={handleExtraSpace}>Remove Extra Spaces</button>

        {/* <button className="btn btn-danger mx-2" onClick={handleLightTheme}>Light mode</button> */}
        {/* <button className="btn btn-danger mx-2" onClick={handleDarkTheme}>Dark mode</button> */}

    </div>   
    <div className="container my-2 ">
      <h2>Your text summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{ 0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
