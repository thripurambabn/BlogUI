import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
class PostShow extends React.Component{
    constructor (){
        super()
        this.state = {
            post : {},
            comments : [],
            user :{}
        }
    }
    componentDidMount(){
          const id = this.props.match.params.id
           axios.get (`https://jsonplaceholder.typicode.com/posts/${id}`)
           .then((response) => {
               const post = response.data
               this.setState({post})
               axios.get(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
               .then((response) => {
                   const user = response.data
                   this.setState({user})
               })
           })
           axios.get (`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
            .then((response) => {
                const comments = response.data
                this.setState({comments})
            })
    }
    render(){
        return (
        <div>
             <h2>{this.state.post.title} </h2>
             <p>{this.state.post.body}</p>
             <p><Link to ={`/users/${this.state.user.id}`}> {this.state.user.name} </Link> </p>
             <h2> Listing Comments - {this.state.comments.length} </h2>
              <ul>
                  { this.state.comments.map(comment => {
                      return (
                          <li key ={comment.id}>{comment.body} </li>
                      )
                  })}
                  </ul>
        </div>

        )
    }
}

export default PostShow