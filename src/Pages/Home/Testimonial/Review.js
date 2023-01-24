import React from 'react';

const Review = ({ review }) => {
    const { name, img, review: userReview, location } = review;
    return (
        <div className="card h-96 mt-10 border shadow-xl rounded-xl hover:scale-110">
            <div className="card-body">
                <p>{userReview}</p>
                <div className="mt-6">
                    <div className="mr-6">
                        <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mt-8 ml-40
">
                            <img src={img} alt='' />
                        </div>
                    </div>
                    <div>
                        <h5 className="text-lg font-bold flex justify-center mt-3">{name}</h5>
                        <p className='flex justify-center'>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;