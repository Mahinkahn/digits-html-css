import React from 'react';

const InfoCard = ({ card }) => {
    const { icon, bgClass } = card;
    return (
        <div className={`card p-6 md:card-side hover:scale-150 
         ${bgClass}`}>
            <figure>
                <img src={icon} alt="Movie" />
            </figure>
        </div>
    );
};

export default InfoCard;