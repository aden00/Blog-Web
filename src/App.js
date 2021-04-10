import React ,{Component} from 'react';
import './App.css';
import Navigation from './Component/Navigation'
import SignIn from './Component/SignIn';
import Intro from './Component/Intro';
//import PostContainer from './Component/PostContainer';
import SignUp from './Component/SignUp'
import Blogpage from './Component/Blogpage'
import Post from './Component/Post'
class App extends Component {
  constructor(){
    super();
    this.state={
      route:'home'
    }
  }
  onRouteChange=(route)=>{
    this.setState({route:route})
  }
  render(){
    return (
      <div className="App">

        {this.state.route==='signin'?
        <div>

        <SignIn onRouteChange={this.onRouteChange}/>
        </div>:
        this.state.route==='home'?
        <div>
          <Navigation onRouteChange={this.onRouteChange}/>
          <Intro/>
          <div id="postcontainer" className=" ph2-ns flex justify-center">

          <Post onRouteChange={this.onRouteChange}/>
          <Post/>
          <Post/>
          <Post/>

        </div>
        </div>:
        this.state.route==='signup'?
        <SignUp onRouteChange={this.onRouteChange}/>:
        <div>
        <Navigation/>
        <Blogpage/>
        </div>}
      </div>
    )    
  }

}

export default App;
