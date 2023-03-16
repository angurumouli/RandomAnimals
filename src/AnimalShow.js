import './AnimalShow.css'
import { useState } from 'react';
import heart from './svg-zip/heart.svg';
import bird from './svg-zip/bird.svg';
import cat from './svg-zip/cat.svg';
import cow from './svg-zip/cow.svg';
import dog from './svg-zip/dog.svg';
import gator from './svg-zip/gator.svg';
import horse from './svg-zip/horse.svg';


const svgMap ={
    bird,
    cat ,
    cow ,
    gator,
    dog,
    horse,
    heart
}

function AnimalShow ({type}) {

    const [clicks,setClicks] = useState(0);

    const handleClick = () => {
        setClicks(clicks+1)
    }

    return <div className='animal-show' onClick={handleClick}>
                <img alt='animals' 
                     className='animal' 
                     src={svgMap[type]} 
                     height='100px' width='100px' 
                />
                
                <img alt='heart'  
                     src={heart}
                     className='heart'
                     style={{width: 10 + 10*clicks +'px'}}
                />
           </div>;
}

export default AnimalShow; 