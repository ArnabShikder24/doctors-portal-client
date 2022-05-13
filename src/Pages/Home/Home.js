import React from 'react';
import Banner from '../../components/Banner/Banner';
import Contact from '../../components/Contact/Contact';
import Info from '../../components/Info/Info';
import MakeAppointment from '../../components/MakeAppointment/MakeAppointment';
import Services from '../../components/Services/Services';
import Testimonials from '../../components/Testimonials/Testimonials';
import Footer from '../../components/Footer/Footer'

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <Contact></Contact>
            <Footer></Footer>
        </>
    );
};

export default Home;