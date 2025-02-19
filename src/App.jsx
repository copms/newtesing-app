import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardSlider from './assets/CardSlider'





const cardsData = [
  { id: 1, title: "Card 1", content: "This is the content of card 1" },
  { id: 2, title: "Card 2", content: "This is the content of card 2" },
  { id: 3, title: "Card 3", content: "This is the content of card 3" },
  { id: 4, title: "Card 4", content: "This is the content of card 4" },
  { id: 5, title: "Card 5", content: "This is the content of card 5" },
];

function App() {
 

  return (
    <>
    <div className='hed'>
    <h1>My tesing website for github deployment</h1>
    </div>
    <div className="App">
      <h1 className="text-center text-2xl font-bold my-6">Card Slider</h1>
      <CardSlider cards={cardsData} />
    </div>
    
    </>
  )
}

export default App
