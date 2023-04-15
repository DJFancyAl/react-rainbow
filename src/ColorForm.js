import React, { useState } from 'react'

function ColorForm({addColor}) {
    let [input, setInput] = useState('')
    let [alert, setAlert] = useState(true)


    const handleSubmit = (e) => {
        e.preventDefault()
        let testObject = new Option().style;
        testObject.color = input
        if (testObject.color == input && input != ''){
            addColor(input)
            setInput('')
            setAlert(false)
        } else {
            setAlert(true)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input id="colorInput" placeholder='Enter Color Here...' value={input} type="text" onChange={(e) => setInput(e.target.value)} />
                <button type='submit'>Submit!</button>
            </form>
            <h3>{alert && 'Not a valid color!'}</h3>
            <p className='samples'><b>Sample colors: </b> 'violet', 'blue', 'lightblue', 'green', 'greenyellow', 'yellow', 'orange', 'red'</p>
        </>
    )
}

export default ColorForm