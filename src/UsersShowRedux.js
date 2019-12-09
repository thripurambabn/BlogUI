import React from 'react'
import { connect} from 'react-redux'


class UserShowRedux extends React.Component{


   // componentDidMount(){
       // this.props.dispatch(startGetTodos(this.props.user.id)) 
    //}
    render()
    {
       // console.log('user',this.props.user,this.props.posts)
        return (
            <div>
            <h2>User show </h2>
            {this.props.user &&
            <p> {this.props.user.name}- {this.props.user.email}</p>}
            <h2> Posts written by user -{this.props.posts.length}</h2>
            <ul> 
                {this.props.posts.map(post =>{
                    return (
                        <li key={post.id}>{post.title}</li>
                    )
                })}
            </ul>
            </div>
        )
    }
}

const mapStateToProps = (state, props) =>{
   // console.log('usershow',state.users,state.posts)
    return {
        user: state.users.find(user => user.id == props.match.params.id),
        posts:state.posts.filter(post=> post.userId== props.match.params.id)
    }
}


export default connect(mapStateToProps)(UserShowRedux)