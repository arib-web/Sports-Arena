import React, { useContext } from 'react';
import Banner from '../Banner/Banner';
import ChooseUs from '../ChooseUs/ChooseUs';
import PopularClass from '../PopularClass/PopularClass';
import { AuthContext } from '../../../Provider/AuthProviders';

const Home = () => {
    const { theme } = useContext(AuthContext);
    return (
        <div className={`${theme === "dark" ? "dark-theme" : "light-theme"}`}>
            <Banner></Banner>
            <ChooseUs></ChooseUs>
            <PopularClass></PopularClass>
        </div>
    );
};

export default Home;