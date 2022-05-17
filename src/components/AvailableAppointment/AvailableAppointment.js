import { format } from 'date-fns';
import React, { useState } from 'react';
import ApointServices from '../ApointServices/ApointServices';
import BookingModal from '../BookingModal/BookingModal';
import {useQuery} from 'react-query';
import Loading from '../Loading/Loading';

const AvailableAppointment = ({selected}) => {
    const [treatment, setTreatment] = useState(null);
    const formatedDate = format(selected, 'PP');

    const {data : services, isLoading, refetch} = useQuery(['available', formatedDate], () => fetch(`http://localhost:5000/available?date=${formatedDate}`)
            .then(res => res.json())
    )

    if(isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='my-32'>
            <p className='text-secondary text-center text-xl mb-24'>Available Appointments on {formatedDate}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services?.map(service => <ApointServices
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
                refetch={refetch}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;