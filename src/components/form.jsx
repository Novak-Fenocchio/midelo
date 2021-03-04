import React, { Component } from 'react'

const Form = (props) =>{
        return (
            <div>
                <form onSubmit={props.valueToConvert}>
                    <input type='number' name='numberToConvert'/>
                    <button type="submit">Calculate</button>
                </form>
            </div>
        )
}

export default Form