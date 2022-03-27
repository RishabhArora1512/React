import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClear = ()=>{
        let newText = ' ';
        setText(newText);
    }

    const handleFirstLetter = ()=>{
        var splitStr = text.toLowerCase().split(' ');
        for (var i = 0; i < splitStr.length; i++) {
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
        }
        setText(splitStr.join(' '));
    }

    const handleOnChange = (event)=>{
        setText(event.target.value); //To let you type your own input, without this cannot type our own content
    }
    

    const [text, setText] = useState('');
    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-3" onClick={handleUpClick}>
                Convert to Uppercase 
            </button>
            <button className="btn btn-primary mx-3" onClick={handleLowClick}>
                Convert to Lowercase 
            </button>
            <button className="btn btn-primary mx-3" onClick={handleFirstLetter}>
                Capitalise First Letter
            </button>
            <button className="btn btn-primary mx-3" onClick={handleClear}>
                Clear Text
            </button>
        </div>

        <div className="container my-3">
            <h2>Your text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes Read time</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
        </>

    )
}
