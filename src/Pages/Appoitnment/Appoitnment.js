import React, { useState } from 'react';
import AppoinmentBanner from '../../components/AppoinmentBanner/AppoinmentBanner';
import AvailableAppointment from '../../components/AvailableAppointment/AvailableAppointment';
import Footer from '../../components/Footer/Footer';

const Appoitnment = () => {
    const [selected, setSelected] = useState(new Date());
    return (
        <>
            <AppoinmentBanner selected={selected} setSelected={setSelected}></AppoinmentBanner>
            <AvailableAppointment selected={selected}></AvailableAppointment>
            <Footer></Footer>
        </>
    );
};

export default Appoitnment;