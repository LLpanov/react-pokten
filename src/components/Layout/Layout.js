import React from 'react';
import {Outlet} from 'react-router-dom';

import {Header} from '../Header/Header';
import {Footer} from "../Footer/Footer";
import '../../App.scss';

const Layout = ({theme ,switchTheme}) => {
    return (
        <div className={'container'}>
            <Header theme={theme } sswitchTheme={switchTheme}/>
            <div className={'outlet'}><Outlet/></div>
            <Footer/>
        </div>
    );
};

export {Layout};