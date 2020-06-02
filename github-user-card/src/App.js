import React from 'react';
import './App.css';
import axios from 'axios';
import UserCard from './components/userCard'
import Followers from './components/Followers'

class App extends React.Component {
  state ={
    nick: 'nick-ussery',
    userInfo:[],
    value:'nick-ussery',
    followers: []
  }

  componentDidMount(){
    axios.get('https://api.github.com/users/nick-ussery')
    .then(res=>{
      console.log('component mounted')
      this.setState({userInfo: res.data})
      axios.get(res.data.followers_url)
      .then(res=>{
        console.log('response for followers',res)
        this.setState({followers:res.data.map(follower=>{
          return follower
        })})
    }).catch(err=>{console.log(err)})
  }).catch(err=>console.log(err))
  }

  onInputChange = e =>{
    this.setState({
      value:e.target.value
    })
  }

  fetchUser = (e)=>{
    e.preventDefault();
    //axios call for designated user
    axios.get(`https://api.github.com/users/${this.state.value}`)
    .then(res=>{
      // console.log(res)
      //sets state for the chosen user
      this.setState({userInfo: res.data})
      //axioscall for the followers
      axios.get(res.data.followers_url)
      .then(res=>{
        console.log('response for followers',res)
        this.setState({followers:res.data})
    }).catch(err=>{console.log(err)})
    })
    .catch(err=>{console.log(err)})
  }

  render(){
  return (
    <div className="App">
      <h1>Github Users</h1>
      <input type='text' placeholder='type in a username' value={this.state.value} onChange={this.onInputChange} />
      <button onClick={this.fetchUser}>Find User</button>
      <UserCard user={this.state.userInfo}/>
      <Followers followers={this.state.followers} />
    </div>
  );}
}

export default App;
