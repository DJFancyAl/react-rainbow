import React from 'react'

function ColorBlock( {color} ) {
  return (
    <div
        className='colorBlock'
        style={{'backgroundColor': color}}>
        <p style={{'margin': 0}}>{color}</p>
    </div>
  )
}

export default ColorBlock