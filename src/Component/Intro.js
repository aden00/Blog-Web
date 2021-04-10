import React from 'react';

function Intro (){
    return(
      <header className="vh-90 dt w-100 h-25 flex justify-center" >
        <div style={{background: 'url(http://mrmrs.github.io/photos/display.jpg) no-repeat center right', backgroundSize: 'cover'}} className="w-100 dtc v-mid cover ph3 ph4-m ph5-l">
          <h1 className="f3 f-subheadline-l measure lh-title fw9">Blog web</h1>
          <h2 className="f6 fw6 black">made by myself</h2>
        </div>
      </header>

    )
}
export default Intro;