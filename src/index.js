import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from './store/configureStore'
//import { increment, decrement, reset } from './actions/count'
import { Provider } from 'react-redux'
import { startSetUsers} from './actions/user'
import { startSetPosts} from './actions/posts'

const store = configureStore()
console.log(store.getState())

store.subscribe(() => {
    console.log(store.getState())
})

//async action generator
store.dispatch(startSetUsers())
store.dispatch(startSetPosts())

const ele = (
    <Provider store={store}>
        <App />
    </Provider>
)
ReactDOM.render(ele, document.getElementById('root'));
