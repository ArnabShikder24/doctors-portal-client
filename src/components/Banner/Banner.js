import React from 'react';
import { Link } from 'react-router-dom';
import chair from '../../assets/images/chair.png';

const Banner = () => {
    return (
        <div className="hero min-h-screen px-12 bg-png">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='chair' />
            <div>
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <Link to='/appointment'><button className="btn uppercase font-bold text-white bg-gradient-to-r from-secondary to-primary border-0">Get Started</button></Link>
            </div>
        </div>
        </div>
    );
};

export default Banner;