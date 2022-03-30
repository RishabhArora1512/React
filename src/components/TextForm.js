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
        <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'grey':'white', 
                color: props.mode === 'dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
                Convert to Uppercase 
            </button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>
                Convert to Lowercase 
            </button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleFirstLetter}>
                Capitalise First Letter
            </button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleClear}>
                Clear Text
            </button>
        </div>

        <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
            <h2>Your text Summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} Minutes Read time</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter something in the above textbox"}</p>
        </div>
        </>

    )
}
