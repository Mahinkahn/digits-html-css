import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Testimonial from '../Testimonial/Testimonial';
import ConterImg from './ConterImg/ConterImg';
import FlexCar from './FlexCar/FlexCar';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <MakeAppointment></MakeAppointment>
            <ConterImg></ConterImg>
            <Testimonial></Testimonial>
            <FlexCar></FlexCar>
        </div>
    );
};

export default Home;