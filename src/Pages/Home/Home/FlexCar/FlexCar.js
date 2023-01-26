import React from 'react';

const FlexCar = () => {
    return (
        <div className="hero w-[1600px] h-[323px] bg-primary rounded-md mt-[150px]">
            <div className="hero-content flex-col lg:flex-row-reverse gap-96">
                <button className="btn gap-2 hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                    Get in touch now
                </button>
                <div className='mr-44'>
                    <h1 className="text-5xl font-bold text-white leading-normal">Box Office News <br />Office News</h1>
                </div>
            </div>
        </div>
    );
};

export default FlexCar;