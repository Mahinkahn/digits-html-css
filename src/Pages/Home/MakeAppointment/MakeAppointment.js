import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import Icon1 from '../../../assets/images/Icon1.png'
import Icon2 from '../../../assets/images/Icon2.jpg'
import Icon from '../../../assets/images/Icon.png'
import appointment from '../../../assets/images/appointment.png'

const MakeAppointment = () => {
    return (

        <div className='max-w-[1440px] mx-auto'>
            <div className='mt-[159px]'>
                <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold text-center text-accent">Whatever work you do, <br />
                    we're able to help</h1>
            </div>
            <div className="mt-[-140px] flex justify-center">
                <div className="hero-content flex-col lg:flex-row ">
                    <img src={doctor} alt="" className="mr-[168px] mt-[40px] md:block  w-[700px]" />
                    <div className="container mt-4 flex-col lg:flex-row">
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                                <div className=" w-20 h-20">
                                    <img src={Icon} alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div>
                            <div>
                                <div className="lg:text-2xl md:text-2xl text-lg font-bold ml-12 text-accent mt-3">Design and Assets </div>
                                <div className="text-xs opacity-50 ml-12 mt-5 text-accent font-medium">Make your brand stand out with <br />
                                    pixel-perfect design crafted to <br />
                                    perfection
                                </div>
                            </div>
                        </div>
                        <div className='mt-[47px] w-[405px]'>
                            <hr />
                        </div>
                        <br />
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                                <div className=" w-20 h-20">
                                    <img src={Icon2} alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div>
                            <div>
                                <div className="lg:text-2xl md:text-2xl text-lg font-bold ml-12 text-accent mt-3">Design and Assets </div>
                                <div className="text-xs opacity-50 ml-12 mt-5 text-accent font-medium">Make your brand stand out with <br />
                                    pixel-perfect design crafted to <br />
                                    perfection
                                </div>
                            </div>
                        </div>
                        <div className='mt-[47px] w-[405px]'>
                            <hr />
                        </div>
                        <br />
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                                <div className="w-20 h-20">
                                    <img src={Icon1} alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div>
                            <div>
                                <div className="lg:text-2xl md:text-2xl text-lg font-bold ml-12 text-accent mt-3">Design and Assets </div>
                                <div className="text-xs opacity-50 ml-12 mt-5 text-accent font-medium">Make your brand stand out with <br />
                                    pixel-perfect design crafted to <br />
                                    perfection
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MakeAppointment;