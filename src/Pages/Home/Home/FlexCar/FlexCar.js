import React from 'react';
import mail from '../../../../assets/images/mail.png'

const FlexCar = () => {
    return (
        <div className="hero h-[323px] bg-primary rounded-md mt-[150px]">
            <div className="hero-content flex-col lg:flex-row sm:flex-row gap-96 mr-[200px]">
                <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold text-white ">Ready to launch  <br />your next website?</h1>
                <div className='ml-[100px] hero-content flex-col lg:flex-col'>
                    <button className="btn gap-3 h-14 w-[245px] text-accent font-bold rounded-full hover:scale-110">
                        <img src={mail} alt="" />
                        Get in touch now
                    </button>
                    <p className='text-white mr-6'>Or, take a peek inside our design studio</p>
                </div>
            </div>
        </div>
    );
};

export default FlexCar;