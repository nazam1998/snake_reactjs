import React from 'react';
const Snake = (props) => {
    let style = { top: `${props.dot[0]}%`, top: `${props.dot[1]}%` }
    return (
        <div style={style}>
        </div>
    )
};
export default Snake;