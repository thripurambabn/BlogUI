import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class PostsListRedux extends React.Component {

        render(){
            return (
                <div>
                <h2>Listing posts - { this.props.posts.length}</h2>
                <ul>
                    {
                    this.props.posts.map(post =>{
                        console.log(post)
                        return (
                            <li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
                        )
              })
                    }
        </ul>
        </div>
            )}
    }




const mapStateToProps = (state)=>{
    //console.log(state.users)
    return { 
        posts:state.posts
    }
}
export default connect(mapStateToProps)(PostsListRedux)