import './App.css'
import { useState } from "react";
import AnimalShow from "./AnimalShow"; 

function getRandAnimal() {
    const animals = ['bird','cat','cow','gator','horse'];

    return animals[Math.floor(Math.random() * animals.length)]
}

function App() {
     
    const [animals,setAnimals] = useState([]);

    const handlerClick = () => {
        setAnimals([...animals,getRandAnimal()]);
    };

    const renderedAnimals = animals.map((animal,index) => {
        return <AnimalShow type={animal} key={index}/>
    });

    return <div className='app'>  
                <button onClick ={handlerClick}> ADD Animals </button>
                <div className='animal-list'>{renderedAnimals}</div>
            </div>
}

export default App;