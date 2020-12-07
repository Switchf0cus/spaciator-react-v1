import React from 'react';
import HeaderAndTitle from '../components/main-header';
import ContentContainer from '../components/LandingPage/content-component';
import ButtonAppBar from '../components/LandingPage/appbar.component';

export default function FirstPage() {
    return(
        <div>
            <ButtonAppBar fixed/>
            <HeaderAndTitle/>
            <ContentContainer/>
        </div>
        )
}