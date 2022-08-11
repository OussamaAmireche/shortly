import logo from './images/logo.svg';
import bars from './images/bars-solid.svg';
import { useState } from 'react';
import { useEffect } from 'react';

const Navbar = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [largeScreen, SetLargeScreen] = useState(true);
    window.onresize = () => {
        if(window.innerWidth <= 776){
            SetLargeScreen(false);
        }else{
            SetLargeScreen(true);
        }
    }
    useEffect(() => {
        if(window.innerWidth <= 776){
            SetLargeScreen(false);
        }
    }, [])
    return ( 
        <div className="navbar">
            <div className="container">
                <div className="small-screen-header">
                    <img src={logo} alt="logo" className="logo"></img>
                    <div onClick={() => {
                        isClicked ? setIsClicked(false) : setIsClicked(true);
                    }} className="bars">
                        <img src={bars} alt="bars"/>
                    </div>
                </div>
                {   (isClicked || largeScreen) &&
                    <nav>
                    <ul className="unstyled-list">
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Ressources</li>
                    </ul>
                    <div className="buttons unstyled-list">
                        <li>Login</li>
                        <button className="main-button-sm">Sign Up</button>
                    </div>
                </nav>
                }
            </div>
        </div>
     );
}
 
export default Navbar;