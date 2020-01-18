import React, { Fragment } from 'react';
const Snake = (props) => {
    return (
        <div>
            {props.dot.map((e, index) => {
                const style = {
                    left: `${e[0]}%`,
                    top: `${e[1]}%`
                }
                console.log(style);
                
                return (<div className='snake' key={index} style={style} ></div>)
            })}
        </div>
    )
};
export default Snake;