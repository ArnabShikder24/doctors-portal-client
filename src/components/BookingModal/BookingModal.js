import { format } from 'date-fns';
import React from 'react';
import {useAuthState} from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const BookingModal = ({ selected, treatment, setTreatment, refetch }) => {
    const { _id, name, slots } = treatment;
    const [user] = useAuthState(auth);
    const formattedDate = format(selected, 'PP');

    const handleBooking = event =>{
        event.preventDefault();
        const slot = event.target.slot.value;
        const patientName = event.target.name.value;
        const Phone = event.target.phone.value;

        const booking = {
            treatmentId: _id,
            treatment: name,
            patient: patientName, 
            patientEmail: user.email,
            patientPhone: Phone,
            date: formattedDate,
            slot,
        }
        
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            if(data.success) {
                toast(`Appointment is set, ${formattedDate} at ${slot}`, {
                    position: "top-center"
                })
            }
            else {
                toast.error(`Already have an Appointment on, ${data?.booking?.date} at ${data?.booking?.slot}`)
            }
            refetch()
            setTreatment(null);
        })

    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-center mb-5">Booking for: {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                        <input type="text" disabled value={formattedDate} className="input input-bordered w-full max-w-xs" />
                        <select name="slot" className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, index) =><option key={index} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name="name" placeholder="Your Name" className="input input-bordered w-full max-w-xs" required/>
                        <input type="email" name="email" value={user?.email} disabled className="input input-bordered w-full max-w-xs" required/>
                        <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" required/>
                        <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;