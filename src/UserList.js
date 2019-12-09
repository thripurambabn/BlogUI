import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class UserList extends React.Component {
    constructor(){
        super()
        this.state={
            users:[]
        }
        }

    componentDidMount() {
        axios.get('http://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            const users = response.data
            this.setState({users})
        })
        .catch(err => {
            alert (err)
        })
    }    
    
    render(){
        return(
            <div>
                <h2>User List{this.state.users.length}</h2>
                <ul>
                    {
                    this.state.users.map(function(user,i){
                    return <li key={user.id}><Link to={`/users/${user.id}`}>{user.name}</Link>
                 </li>

                })}
                
                
                </ul>
            </div>
        )
    }

}
export default UserList