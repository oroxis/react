import React, { useState } from 'react';


export default function Forms() {


    const [input, setInput] = useState({
        firstName: '',
        email: '',
    });
    const handleChange = (e) => {
        setInput({...input, [e.target.name]: e.target.value});
        console.log(input);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // if (input.firstName === '') {
        //     alert('Please enter your first name');
        //     }else {
        //         ('Please complete the form');
        //     }
        // }
        if (input.firstName && input.email) {
            alert('Thank you' + input.firstName);
        } else {
            alert ('Please fill the form correctly');
        }

    };
    return (
        <div>
            <form>
            <input type="text" onChange={(e) => handleChange(e)} name="firstName"/> 
            <input type="email" onChange={(e) => handleChange(e)} name="email"/>
            <input type="email" onChange={(e) => handleChange(e)} name="email"/>
            <button onClick={handleSubmit}>Submit</button> 
            </form>
            
            
        </div>
    )
}
