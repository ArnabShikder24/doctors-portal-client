import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import Service from '../Service/Service';
import treatment from '../../assets/images/treatment.png';
import { Link } from 'react-router-dom';

const Services = () => {
    const services = [
        {
            _id: 1,
            title: 'Fluoride Treatment',
            image: fluoride
        },
        {
            _id: 2,
            title: 'Fluoride Treatment',
            image: cavity
        },
        {
            _id: 3,
            title: 'Fluoride Treatment',
            image: whitening
        }
    ]
    return (
        <div className='my-20'>
            <div className='text-center'>
                <h1 className='text-secondary text-xl font-bold'>OUR SERVICES</h1>
                <h1 className='text-3xl'>Services We Provide</h1>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 px-12 gap-12 my-16'>
                {
                    services.map(s => <Service 
                        key={s._id}
                        title={s.title}
                        img={s.image}
                    ></Service>)
                }
            </div>

            <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row lg:justify-between">
                <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" alt='hero'/>
                <div className='mx-12'>
                <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <Link to='/appointment'><button className="btn uppercase font-bold text-white bg-gradient-to-r from-secondary to-primary border-0">Get Started</button></Link>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Services;