import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import ApointServices from '../ApointServices/ApointServices';
import BookingModal from '../BookingModal/BookingModal';

const AvailableAppointment = ({selected}) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className='my-32'>
            <p className='text-secondary text-center text-xl mb-24'>Available Appointments on {format(selected, 'PP')}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <ApointServices
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></ApointServices>)
                }
            </div>
            {treatment && <BookingModal
                selected={selected}
                treatment={treatment}
                setTreatment={setTreatment}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;