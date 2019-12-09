import axios from 'axios'
export const setUsers = (users) =>{
    return {
        type: 'SET_USERS',
        payload:users
    }

}

export const startSetUsers =() =>{
    return (dispatch) => {
        axios.get('http://jsonplaceholder.typicode.com/users')
        .then(response => {
            const users = response.data
           // console.log(response.data)
            dispatch(setUsers(users))
        })

    }
}