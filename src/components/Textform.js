import React, { useState } from 'react'

export default function Textform() {
    const [text,setText]=useState('');
    const uppercase=()=>
    {
let newText=text.toUpperCase();
setText(newText);
    }
    const clickOnChanges=(e)=>{
        setText(e.target.value);
    }
    const lowercase=()=>{
        let newText=text.toLowerCase();
        setText(newText);

    }
    const clear=()=>{
        let newText="";
        setText(newText);
    }
  return  (
    <>
    <div class="container">
<h2>TEXTAREA</h2>
    <div className="form-floating my-2">
        <textarea className="form-control"onChange={clickOnChanges} value={text} placeholder="" id="floatingTextarea" defaultValue={""} rows={6}/>
        <label htmlFor="floatingTextarea"></label>
      </div>
      <button className='btn btn-primary mx-2' onClick={uppercase}>Uppercase</button>
      <button className='btn btn-primary mx-2'onClick={lowercase}>LowerCase</button>
      <button className='btn btn-primary mx-2'onClick={clear}>Clear</button>

      
      </div>

      <div>
          <h2>textCounter</h2>
          <p>Total Character={text.length}</p>
          <p>total Words={text.split(" ").length-1}</p>
      </div>
    </>
  )
}
