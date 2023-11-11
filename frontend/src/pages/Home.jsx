import React from 'react';
import LoginRegister from '../components/LoginRegister.jsx';
import NavigationBar from '../components/NavigationBar.jsx';
import '../App.scss';
import Background from '../components/Background.jsx';



const Home = () => {

    return (

    <header class="header">
        <NavigationBar />
    </header>,
        <section class="home">
            <div class="form_container">
                <i class="uil uil-times form_close"></i>
                <LoginRegister />
            </div>

        </section>,
        <Background />
    )
};

export default Home;