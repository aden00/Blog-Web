import React from 'react';
function Post ({onRouteChange}){
    return(
        <div className="link dim black b mw10 fl pa2" >
            <article className="bg-white center mw10 ba b--black-10 mv4">
                <img src="http://tachyons.io/img/cat-720.jpg" className="w-100 db" alt="Closeup of a tabby cat yawning." />
                <div className="pa3">
                <p className="link dim lh-title" onClick={()=>onRouteChange('blogpage')}> 15 things every cat owner should know</p>
                <small className="gray db pv2">AMP - <time>6 hours ago</time></small>
                </div>
        </article>
        </div>
    )
}
export default Post;