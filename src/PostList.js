import React from 'react'
import {Link,Route} from 'react-router-dom'
import axios from 'axios'
import PostShow from './PostShow'

class PostList extends React.Component {
    constructor(){
        super()
        this.state={
            posts:[]
        }
    }
    componentDidMount(){
        axios.get(`http://jsonplaceholder.typicode.com/posts`)
        .then((response) => {
            const posts = response.data
            this.setState({ posts })
        })
    }
    
    render(){
        return (
        <div>
            <h2> Listing posts - {this.state.posts.length} </h2>
            <ul>
            { 
                    this.state.posts.map((post) => {
                    return (
                        <div>
                            <li  key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
                       <Route path="/PostShow" component={PostShow} />
                        
                        </div>
               ) 
                    })}
            </ul>                
        </div>
        )
    }

}
export default PostList