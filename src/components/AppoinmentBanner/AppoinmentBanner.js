import React from 'react';
import chair from '../../assets/images/chair.png';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppoinmentBanner = ({selected, setSelected}) => {

    let footer = <p className='font-bold'>Please pick a day.</p>;

    if (selected) {
      footer = <p className='font-bold'>You picked {format(selected, 'PP')}.</p>;
    }

    return (
        <div className="hero min-h-screen px-12 bg-png">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={chair} className="max-w-sm rounded-lg shadow-2xl lg:ml-40" alt='chair' />

            <div className="card w-96 bg-base-100 shadow-2xl">
                <div className="card-body">
                <DayPicker
                mode="single"
                selected={selected} 
                onSelect={setSelected}
                footer={footer}
                />
                </div>
            </div>
        </div>
        </div>
    );
};

export default AppoinmentBanner;