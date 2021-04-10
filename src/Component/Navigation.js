import React from 'react';

function Navigation ({onRouteChange}){
    return(
        <div>
            <header class="bg-black-90 w-100 ph3 pv3 pv4-ns ph4-m ph5-l ">
                <nav class="f6 fw6 ttu tracked">
                    <a class="link dim white dib mr3" href="#home" title="Home">Home</a>
                    <a class="link dim white dib mr3" href="#postcontainer" title="About">Posts</a>
                    <a onClick={()=>onRouteChange('signin')} class="f6 grow no-underline br-pill ba ph3 pv2 mb2 dib red" href="#0">Sign Out</a>
                </nav>
            </header>

        </div>
    )
}
export default Navigation;