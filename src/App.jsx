import React, { useState, useEffect } from 'react';
import Snake from './components/Snake';
import Food from './components/Food';
const getPos = () => {
    let min = 1;
    let max = 98;
    let x = Math.floor(Math.random() * (max - min + 1) / 2) * 2;
    let y = Math.floor(Math.random() * (max - min + 1) / 2) * 2;
    return [x, y];
}
const App = () => {
    const [snake, setSnake] = useState([[0, 0], [2, 0]]);
    const [food, setFood] = useState(getPos());
    const [direction, setDirection] = ('RIGHT');
    useEffect(() => {
        document.onkeydown = keyDown;
    });
    const keyDown = (e) => {
        e = e || window.event;
        
    }
    return (
        <div className='plateau'>
            <Snake dot={snake} />
            <Food dot={food} />
        </div>
    );
};

export default App;
