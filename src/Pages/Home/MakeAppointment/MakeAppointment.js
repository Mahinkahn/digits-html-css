import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import Icon1 from '../../../assets/images/Icon1.png'
import Icon2 from '../../../assets/images/Icon2.jpg'
import Icon from '../../../assets/images/Icon.png'
import appointment from '../../../assets/images/appointment.png'

const MakeAppointment = () => {
    return (
        <section className='mt-48'
        // style={{
        //     background: `url(${appointment})`
        // }}
        >
            <h1 className=" text-4xl font-bold text-center">Make an appointment Today</h1>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} alt="" className="mr-52 hidden md:block -mt-[]  w-[650px] " />
                    <div className="flex-col lg:flex-row ">
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                                <div className="mask mask-squircle w-20 h-20">
                                    <img src={Icon} alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold ml-8">Design and Assets </div>
                                <div className="text-sm opacity-50 ml-8 mt-5">digital marketing images to choose from. Free high resolution picture download. s</div>
                            </div>
                        </div>
                        <div className='mt-10'>
                            <hr />
                        </div>
                        <br />
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                                <div className="mask mask-squircle w-20 h-20 rounded-sm">
                                    <img src={Icon2} alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold ml-8">Easy Content </div>
                                <div className="text-sm opacity-50 ml-8 mt-5">digital marketing images to choose from. Free high resolution picture download. </div>
                            </div>
                        </div>
                        <div className='mt-10'>
                            <hr />
                        </div>
                        <br />
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                                <div className="mask mask-squircle w-20 h-20">
                                    <img src={Icon1} alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold ml-8 mt-3">Fast and Reliable</div>
                                <div className="text-sm opacity-50 ml-8 mt-5">digital marketing images to choose from. Free high resolution picture download. </div>
                                <div className='mt-10'>
                                    <hr />
                                </div>
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;