import React, {useRef} from 'react';
import {Link} from 'react-router-dom';
import '../../App.scss'

import './Header.scss'

const Header = ({switchTheme}) => {
    const ref = useRef();

    return (
        <div className={'header'}>
            <Link to={'/'}>
                <div className={'logo'}>Movie App</div>
            </Link>
            <div className={'user-image'}><img src="https://owu.com.ua/image/logo/webp/Blue-Big-Bird-Final-Logo.webp"
                                               alt='A'/>
                {/*<div className={'theme-toggle'}><i onClick={()=> changeSwitcher(ref)}  ref={ref} className={'fas fa-toggle-off'}> </i></div>*/}
                <div className={'theme-toggle'}><input type="checkbox" id="switch"/><label onClick={()=> switchTheme()}
                    htmlFor="switch">Toggle</label></div>
            </div>


        </div>
    );
};
export {Header};

