import React from 'react';
import chair from '../../../assets/images/chair.png';
import bg from '../../../assets/images/bg.png';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero lg:mt-32 lg:h-[750px] mt-16 bg-[url(file:///C:/Users/kowse/Videos/pj-digits/bg1.png)]">
            <div className=" flex-col lg:flex-row-reverse text-center">
                <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold text-accent">Good design meets <br /> great user experience</h1>
                <p className="py-6 text-sm mt-[30px] text-gray-500">For everyone, from beginners to experts</p>
                <button className="btn btn-primary mt-[30] mr-[22px] rounded-full hover:scale-110">Buy Digits </button>
                <button className="btn btn-outline btn-primary rounded-full hover:scale-110">See the Features</button>
                <div className='relative'>
                    <img src={chair} className="rounded-lg lg:w-3/2 flex content-center mt-8 mb-12" alt='' />
                </div>
            </div>
        </div>
    );
};

export default Banner;