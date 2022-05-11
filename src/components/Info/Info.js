import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 px-12 py-6 text-white'>
            <InfoCard title='Opening Hours' bg='bg-gradient-to-r from-secondary to-primary' img={clock}></InfoCard>
            <InfoCard title='Visit our location' bg='bg-accent' img={marker}></InfoCard>
            <InfoCard title='Contact us now' bg='bg-gradient-to-r from-secondary to-primary' img={phone}></InfoCard>
        </div>
    );
};

export default Info;