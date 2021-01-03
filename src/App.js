import React from 'react';
import UserList from './components/UserList'
import UserAddForm from "./components/UserAddForm";
import FetchUsers from "./Data/users.json"
import PostList from "./components/PostList"
import FetchPosts from "./Data/posts.json"
import './css/style.css'

class App extends React.Component{

  constructor(){
    super();
    this.state = {
      background: 'grey',
      users: [...FetchUsers],
      msg: "",
      posts: [...FetchPosts],
      showUsers: false,
      showPosts: false
      
    }
  }


  componentDidMount(){


  }

  colorOnChange(event){
    this.setState(
      {background : event.target.value}
    )
  }


  addUser(event){


    this.setState(   (prevState,props) => ({users : [...prevState.users, event]})  );

  }



  deleteUser(id){

    this.setState(function(prevState){
      prevState.users.splice(id,1)
      return{
        users:[...prevState.users]
      }
    })

  }


  warning(ev){
    this.setState({msg : ev})
  }


  showUsers(){
    if (this.state.showUsers===false){
      this.setState({showUsers: true, showPosts:false})
      }else{
        this.setState({showUsers: false})
      }
  }


  showPosts(){
    if (this.state.showPosts===false){
    
    this.setState({showPosts: true, showUsers: false})
    }else{
      this.setState({showPosts: false})
    }
  }

  render(){
    return(
      <div style={{backgroundColor: this.state.background}} className='app'>

        <nav className="navbar">
          <ul>
            <li onClick={() => this.showUsers()}>Users</li>
            <li onClick={() => this.showPosts()}>Posts</li>
          </ul>
        </nav>
        <input type="color" onChange={(event) => this.colorOnChange(event)} className="changeColor"/>

        
        {this.state.showUsers && <UserAddForm addUser={(event) => this.addUser(event)} users={this.state.users} warning={(ev) => this.warning(ev)}/>}
        <h4 style={{"color": "red"}} class="warning-msg">{this.state.msg}</h4>

        {this.state.showUsers && <UserList users={this.state.users} deleteUser={(event)=> this.deleteUser(event)}/>}

        


        {this.state.showPosts && <PostList posts={this.state.posts}/>}

        
      </div>
    )
  }


}

export default App;
