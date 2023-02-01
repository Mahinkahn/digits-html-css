import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import pic from '../../../assets/icons/pic.svg';
import quote from '../../../assets/icons/quote.svg';
import gogle from '../../../assets/icons/gogle.svg';
import tie from '../../../assets/icons/tie.svg';
import InfoCard from './InfoCard';

const InfoCards = () => {

    const cardData = [
        {
            id: 1,
            icon: clock,
        },
        {
            id: 2,
            icon: marker,
        },
        {
            id: 3,
            icon: phone,
        },
        {
            id: 4,
            icon: quote,
        },
        {
            id: 5,
            icon: gogle,
        },
        {
            id: 6,
            icon: pic,
        },
        {
            id: 7,
            icon: tie,
        },
    ]

    return (
        <div className='lg:mt-36 mt-10 text-center max-w-[1440px] mx-auto'>
            <p>Provident cupiditate voluptatem et in. Quaerat</p>
            <div className='grid mt-8 gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-7'>
                {
                    cardData.map(card => <InfoCard
                        key={card.id}
                        card={card}
                    ></InfoCard>)
                }
            </div>
        </div>
    );
};

export default InfoCards;