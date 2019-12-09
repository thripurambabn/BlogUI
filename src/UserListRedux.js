import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class UsersListRedux extends React.Component {

        render(){
            return (
                <div>
                <h2>Listing users - { this.props.users.length}</h2>
                <ul>
                    {
                    this.props.users.map(user =>{
                        console.log(user)
                        return (
                            <li key={user.id}><Link to={`/users/${user.id}`}>{user.name}</Link></li>
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
        users: state.users
    }
}
export default connect(mapStateToProps)(UsersListRedux)