import React from 'react'
import Form from '../components/form';

function Convert(props) {
    
    const convert = async(e) => {
        e.preventDefault();
        const amountToConvert = e.target.elements.numberToConvert.value;    
        console.log(amountToConvert);
      }
    
    return (
        <div>
                <Form valueToConvert={convert}/>  
        </div>
    )
}

export default Convert
