import React, { useState } from 'react'
import './App.css'
import ColorBlock from './ColorBlock'
import ColorForm from './ColorForm'

function App() {
  // let [colors, setColors] = useState(['violet', 'blue', 'lightblue', 'green', 'greenyellow', 'yellow', 'orange', 'red'])
  let [colors, setColors] = useState([])

  let colorMap = colors.map((color, index) => {
    return (
      <ColorBlock key={index} color={color} />
    )
  })

  // Functions
  const addColor = (newColor) => {
    setColors([...colors, newColor])
  }

  return (
    <div className="App">
      {colorMap}
      <ColorForm addColor={addColor} />
    </div>
  );
}

export default App;
