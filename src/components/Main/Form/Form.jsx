import React from "react";
import "./Form.css";

const Form = (props) => (
  <form onSubmit={props.weatherMethod}>
  <input className="inputText" type="text" name="city" placeholder="city" />
  <button className='btnSubmit'>Submit</button>
</form>
)

export default Form;