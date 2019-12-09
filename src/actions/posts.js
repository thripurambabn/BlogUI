import axios from 'axios'
export const setPosts = (posts) => {
    return {
        type: 'SET_POSTS',
        payload: posts
    }
}

export const startSetPosts = () => {
    return (dispatch) =>{
        axios.get(`http://jsonplaceholder.typicode.com/posts`)
            .then(response =>{
                const posts = response.data
               // console.log(response.data)
                dispatch(setPosts(posts))
            })
    }}