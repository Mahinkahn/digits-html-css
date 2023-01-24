import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import peopl1 from '../../../assets/images/people1.png';
import peopl2 from '../../../assets/images/people2.png';
import peopl3 from '../../../assets/images/people3.png';
import Review from './Review';

const Testimonial = () => {

    const reviews = [
        {
            _id: 1,
            name: 'Happy User',
            img: peopl1,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'tempy.club'
        },
        {
            _id: 2,
            name: 'Happy User',
            img: peopl2,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'tempy.club'
        },
        {
            _id: 3,
            name: 'Happy User',
            img: peopl3,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'tempy.club'
        },
    ]

    return (
        <section className='my-16 mt-28'>
            <div className='flex justify-center'>
                <div>
                    <h4 className='text-4xl'>What Our Patients Says</h4>
                </div>
            </div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    >
                    </Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;