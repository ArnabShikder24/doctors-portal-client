import { signOut } from 'firebase/auth';
import React, {useState, useEffect} from 'react';
import {useAuthState} from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyAppointments = () => {
    const [user] = useAuthState(auth);
    const [appointments, setAppointments] = useState([]);
    const navigate = useNavigate()


    useEffect(() => {
        if(user) {
            fetch(`http://localhost:5000/booking?patientEmail=${user?.email}`, {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res => {
                if(res.status === 401 || res.status === 403) {
                    signOut(auth)
                    localStorage.removeItem('accessToken')
                    navigate('/login')
                }
                return res.json()
            })
            .then(data => {
                
                setAppointments(data)
            })
        }
    },[user, navigate])
    return (
        <div>
            <h1 className='text-2xl mb-3'>My Appointments: {appointments.length}</h1>
            <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Treatment</th>
                </tr>
                </thead>
                <tbody>
                    {
                      appointments.map((a, index) => <tr key={index}>
                        <th>{index + 1}</th>
                        <td>{a.patient}</td>
                        <td>{a.date}</td>
                        <td>{a.slot}</td>
                        <td>{a.treatment}</td>
                    </tr>)  
                    }
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default MyAppointments;