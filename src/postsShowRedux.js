import React from 'react'
import { connect} from 'react-redux'


class PostsShowRedux extends React.Component{


 
    render()
    {
        return (
            <div>
            <h2>Posts show </h2>
            {this.props.posts &&
            <p> {this.props.posts.title}- {this.props.posts.body}</p>}
            </div>
        )
    }
}

const mapStateToProps = (state, props) =>{
    return {
        posts: state.posts.find(post => post.id == props.match.params.id),
    }
}


export default connect(mapStateToProps)(PostsShowRedux)