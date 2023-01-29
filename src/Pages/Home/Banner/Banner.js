import React from 'react';
import chair from '../../../assets/images/chair.png';
import bg from '../../../assets/images/bg.png';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero mt-32 h-[750px] bg-[url(file:///C:/Users/kowse/Videos/pj-digits/bg1.png)]">
            <div className="flex-col lg:flex-row-reverse text-center ">
                <h1 className="text-5xl font-bold color:accent text-accent">Good design meets <br /> great user experience</h1>
                <p className="py-6 text-sm mt-[30px] text-gray-500">For everyone, from beginners to experts</p>
                <button className="btn btn-primary mt-[30] mr-[22px] rounded-full hover:scale-110">Buy Digits </button>
                <button className="btn btn-outline btn-primary rounded-full hover:scale-110">See the Features</button>
                <div className='relative'>
                    <img src={chair} className="rounded-lg lg:w-3/2 ml-32 mt-8 mb-12" alt='' />
                </div>
            </div>
        </div>
    );
};

export default Banner;