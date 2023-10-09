import React from 'react'
import './App.css'
import Journal from './components/Journal'
import JournalData from './data'
import Navbar from './components/Navbar'

function App() {
  const jnyData = JournalData.map(item =>{
    return(
      <Journal  key={item.id}
        {...item} 
        
      />
      
    )
  })

  return (
    <div className='App'>
      <Navbar/>
      {jnyData}
    </div>
  )
}

export default App
