import React from 'react';
import Post from './Post'
function PostContainer({onRouteChange}){
    return (
        <div id="postcontainer" className=" ph2-ns flex justify-center">

            <Post onRouteChange={()=>onRouteChange('blogpage')}/>
            <Post/>
            <Post/>
            <Post/>

        </div>
    )
}
export default PostContainer
// ame={} image={} title={}