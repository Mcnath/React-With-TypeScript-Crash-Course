import React, {use, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import List from "./components/List";
import AddToList from "./components/AddToList";

export interface Istate{
  deck:{
    name: string
    price: number
    url: string
    note?: string
  }[]
}

function App() {

  const [decks, setDeck] = useState<Istate["deck"]>([
    {
    name: "Liael Odium",
    price: 500,
    url: "https://preview.redd.it/liael-odium-investigation-v0-dnfdxadwnhld1.png?width=588&format=png&auto=webp&s=a9b1ed7a5b29f838cf539bfc5893bc6afa4faea6",
    note: "Got Animus and Urut"
  }
])

  return (
    <div className="App">
      <h1>Vanguard Decks with prices</h1>
      <List deck={decks}/>
      <AddToList deck={decks} setDeck={setDeck}/>
    </div>
  );
}

export default App;
