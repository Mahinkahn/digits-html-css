import React from 'react';
import Graphic from '../../../../assets/images/Graphic.png'

const ConterImg = () => {
    return (
        <div className="hero bg-schemes lg:mt-[140px] mt-14">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="text-neutral-content">
                <div className="text-center">
                    <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold lg:mt-[139px] mt-16 text-accent">Simplicity meets innovative design</h1>
                    <p className="lg:mt-10 lg:text-sm md:text-xs mt-4 text-xs text-slate-500">Provident cupiditate voluptatem et in. Quaerat fugiat <br /> ut assumenda excepturi exercitationem quasi. <br /> In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary rounded-full lg:mt-10 mt-4 hover:scale-110">Get Started</button>
                </div>
                <img src={Graphic} alt="" className='mt-9  lg:w-[2100px] w-96  lg:h-[700px] h-36' />
            </div>
        </div>
    );
};

export default ConterImg;