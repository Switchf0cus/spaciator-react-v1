import React from 'react';
import HeaderAndTitle from '../components/main-header';
import FirstContentContainer from '../components/LandingPage/first-content-component';
import SecondContentContainer from '../components/LandingPage/second-content-container';

export default function FirstPage() {
    return(
        <div>
            <HeaderAndTitle/>
            <FirstContentContainer/>
            <SecondContentContainer/>
        </div>
        )
}