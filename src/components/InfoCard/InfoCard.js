import React from 'react';

const InfoCard = ({img, bg, title}) => {
    return (
        <div className={`card card-side ${bg} shadow-xl px-5`}>
        <figure><img src={img} alt="Movie" /></figure>
        <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>Click the button to watch on Jetflix app.</p>
        </div>
        </div>
    );
};

export default InfoCard;