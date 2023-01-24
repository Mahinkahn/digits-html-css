import React from 'react';
import Graphic from '../../../../assets/images/Graphic.png'

const ConterImg = () => {
    return (
        <div className="hero bg-schemes mt-28">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="text-neutral-content">
                <div className="text-center">
                    <h1 className="mb-5 text-5xl font-bold mt-24">Hello there</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat <br /> ut assumenda excepturi exercitationem quasi. <br /> In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary mb-5 hover:scale-110">Get Started</button>
                </div>
                <img src={Graphic} alt="" className='hover:scale-105' />
            </div>
        </div>
    );
};

export default ConterImg;