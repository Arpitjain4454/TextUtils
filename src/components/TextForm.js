import React, {useState} from 'react'


export default function TextForm(props) {

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to UpperCase !', 'success');
  }

  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to LowerCase !', 'success');
  }

  const clearText = () => {       
    setText('');
    props.showAlert('Cleared Text !', 'success');
  }

  const handleOnChange = (event) => {
    setText(event.target.value)
  }

  const handleCopy = () => {
    var text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert('Text Copied !', 'success');
  }

  const handleExtraSpaces =() =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert('Removed Extra Spaces !', 'success');
  }

  const [text, setText] = useState('');

  return (
    <>
    <div className='container' style={{color: props.mode==='light'?'black':'white'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label">Example textarea</label>
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'light'?'white':'grey', color: props.mode==='light'?'black':'white'}} id="myBox" rows="3"></textarea>
      </div>
      <button className='btn btn-primary mx-0' onClick={handleUpClick}>Convert to UpperCase</button>
      <button className='btn btn-primary mx-2' onClick={handleDownClick}>Convert to LowerCase</button>
      <button className='btn btn-primary mx-0' onClick={clearText}>Clear Text</button>
      <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy Text</button>
      <button className='btn btn-primary mx-0' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length-1} and {text.length}</p>
    </div>
    <div className="container" my-3 style={{color: props.mode==='light'?'black':'white'}}>
      <h1>Preview</h1>
      <p>{text}</p>
    </div>
    </>

  )
}
