import React from 'react';
import chair from '../../../assets/images/chair.png';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero mt-12">
            <div className="flex-col lg:flex-row-reverse text-center">
                <h1 className="text-5xl font-bold color:accent">Good design meets <br /> great user experience</h1>
                <p className="py-6 text-sm">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda</p>
                <button className="btn btn-primary mr-5 rounded-full hover:scale-110">Buy Digits </button>
                <button className="btn btn-outline btn-primary rounded-full hover:scale-110">See the Features</button>
                <div>
                    <img src={chair} className="rounded-lg lg:w-1/2 shadow-2xl ml-80 mt-9" alt='' />
                </div>
            </div>
        </div>
    );
};

export default Banner;