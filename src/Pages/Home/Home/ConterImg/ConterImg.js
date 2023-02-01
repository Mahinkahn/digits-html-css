import React from 'react';
import Graphic from '../../../../assets/images/Graphic.png'

const ConterImg = () => {
    return (
        <div className="hero bg-schemes mt-[140px]">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="text-neutral-content">
                <div className="text-center">
                    <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold mt-[139px] text-accent">Simplicity meets innovative design</h1>
                    <p className="mt-10 lg:text-sm md:text-xs text-xs text-slate-500">Provident cupiditate voluptatem et in. Quaerat fugiat <br /> ut assumenda excepturi exercitationem quasi. <br /> In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary rounded-full mt-10 hover:scale-110">Get Started</button>
                </div>
                <img src={Graphic} alt="" className='mt-9   w-[2100px]  lg:h-[700px]' />
            </div>
        </div>
    );
};

export default ConterImg;