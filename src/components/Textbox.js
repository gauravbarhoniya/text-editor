import React, { useState } from 'react'

export default function Textbox(props) {
    const [text, setText] = useState('Enter text here');
    const writetext = (event) => {
        setText(event.target.value);
        
    }
    const toupper = () => {
        if(text==="")
        {
            props.showalert("danger","Enter something first")
        }
        else
        {
            let uptext = text.toUpperCase();
            setText(uptext);
            props.showalert("success","Converted to Uppercase!")
        }
    }
    const tolower = () => {
        if(text==="")
        {
            props.showalert("danger","Enter something first")
        }
        else
        {
            let lowtext = text.toLowerCase();
            setText(lowtext);
            props.showalert("success","Converted to Lowercase!")
        }
    }
    const erase = () => {
        if(text==="")
        {
            props.showalert("danger","Enter something first")
        }
        else
        {
            setText("");
            props.showalert("success","Text Cleared!")
        }
    }
    return (
        <>
            {props.alert && <div class={`alert alert-${props.alert.type} mt-1`} role="alert">
                {props.alert.message}
            </div>}
            <div style={{marginTop: "80px"}} className={`container text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label"><h2>{props.heading}</h2></label>
                    <textarea  className="form-control" value={text} onChange={writetext} id="exampleFormControlTextarea1" rows="10" style={{ border: "0px solid white", backgroundColor: props.mode === 'dark' ? '#01193cb3' : 'white', color: props.mode === 'dark' ? 'white' : 'black', boxShadow: props.mode === 'dark' ? "0.1px 0.1px 2.5px 0px rgba(255,255,255,1)" : "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}></textarea>
                </div>
                <button type="button" onClick={toupper} className={`btn btn-outline-${props.mode === 'dark' ? 'light' : 'primary'}`}>Convert to Uppercase</button>
                <button type="button" onClick={tolower} className={`btn btn-${props.mode === 'dark' ? 'light' : 'primary'} mx-2`}>Convert to Lowercase</button>
                <button type="button" onClick={erase} className={`btn btn-${props.mode === 'dark' ? 'light' : 'primary'} mx-2`}>Clear text</button>
            </div>
            <div className={`container my-3 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                <h3>Your text summary</h3>
                <p>{text.split(" ").length} words and {text.length} characters</p>
            </div>
        </>
    )
}
