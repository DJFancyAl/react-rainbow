import React, { useState } from 'react'

function ColorForm({addColor}) {
    let [input, setInput] = useState('')
    let [alert, setAlert] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        let testObject = new Option().style;
        testObject.color = input
        if (testObject.color == input && input != ''){
            addColor(input)
            setInput('')
            document.getElementById("colorInput").value = ''
            setAlert('')
        } else {
            setAlert('Not a valid color!')
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input id="colorInput" placeholder='Enter Color Here...' type="text" onChange={(e) => setInput(e.target.value)} />
                <button type='submit'>Submit!</button>
            </form>
            <h3>{alert}</h3>
            <p className='samples'><b>Sample colors: </b> 'violet', 'blue', 'lightblue', 'green', 'greenyellow', 'yellow', 'orange', 'red'</p>
        </>
    )
}

export default ColorForm