import React, {Component} from 'react';
import './App.css';



class App extends Component{
  constructor(){
    super();

    this.state = {
      friends: [],
      picture: '',
      name:''
    }
    this.updateName = this.updateName.bind(this)
    this.updatePicture = this.updatePicture.bind(this)
    this.addFriend = this.addFriend.bind(this)
  }
  updateName(event){
    this.setState({
      name: event.target.value
    })
  }
  updatePicture(event){
    this.setState({
      picture: event.target.value
    })
  }

  addFriend(){
    const newFriend = {
      name: this.state.name,
      picture: this.state.picture
    }
    const newFriendArray = [...this.state.friends, newFriend]

    this.setState({
      friends: newFriendArray,
      name: '',
      picture: ''
    })
  }
  render(){

    const mappedFriends = this.state.friends.map((friend) => {
      return(
        <div>
          <img src = {friend.picture}/>
          <span>{friend.name}</span>
          
        </div>
      )
    })

      console.log(mappedFriends)

    return (
      <div>

        <label>picture</label>
        <input type = 'text' value = {this.state.picture} onChange = {this.updatePicture} />

        <label>name</label>
        <input type= 'text' value = {this.state.name} onChange = {this.updateName}/>

        <button onClick = {this.addFriend}>Add Friend</button>
      </div>
    )
  }
}

export default App;
