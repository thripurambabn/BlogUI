import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
class UserShow extends React.Component{
    constructor(){
        super()
        this.state ={
            user : {},
            posts :[]
        }
    }

    componentDidMount(){
        const id = this.props.match.params.id
       axios.get(`https://jsonplaceholder.typicode.com/users/${id} `)
       .then((response)=>{
        const user=response.data
        this.setState({user})
    })

    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
               .then((response) => {
                   const posts = response.data
                   //console.log(posts)
                   this.setState({posts})
               })
    
}
    render() {
                     const {username,email,id} = this.state.user          
        return (
               <div>
                   <h2>User Show page -{this.props.match.params.id}</h2>
                   <p>{username} - 
                      {email}  - 
                      {id} </p>


                      <h2>Posts written by user - {this.state.posts.length}</h2>
                       <ul>
                           {
                            this.state.posts.map(post => {
                                return <li key ={post.id}><Link to ={`/posts/${post.id}`}>{post.title}</Link></li>
                            })   
                           }
                       </ul>
               </div>

        )
    }
}

export default UserShow