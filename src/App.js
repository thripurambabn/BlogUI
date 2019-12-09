import React from 'react'
//import { tsPropertySignature } from '@babel/types'
import { BrowserRouter, Route, Link} from 'react-router-dom'
import UsersListRedux from './UserListRedux'
import UsersShowRedux from './UsersShowRedux.js'
import PostsListRedux from './postsListRedux'
import PostsShowRedux from './postsShowRedux'
import Homepage from './Homepage'
import contact from './Contact'

import { Button,ButtonToolbar,Carousel,Navbar,Nav} from 'react-bootstrap'


function App(props){
  return (
    <BrowserRouter>
    <div>
    {/* <ButtonToolbar>
    <Link to="/home"><Button variant="link">Home</Button></Link> 
    <Link to="/contactus"><Button variant="link">Contact US</Button></Link> 
    <Link to="/users"><Button variant="link">Users</Button></Link> 
    <Link to="/posts"><Button variant="link">Posts</Button></Link> 
    </ButtonToolbar> */}
    {/*<p>users count-{props.users.length}</p>
    <button onClick={()=>{
      tsPropertySignature.dispatch(startSetUsers)
    }}>fetch users</button>
    */}
     <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="/home">BLOG UI</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/contactus">Contact</Nav.Link>
      <Nav.Link href="/users">User</Nav.Link>
      <Nav.Link href="/Posts">Posts</Nav.Link>
    </Nav>
  </Navbar>

    <Route path="/home" component={Homepage} exact={true} />
    <Route path="/contactus"  component={contact} />

    <Route path="/users" component={UsersListRedux} exact={true} />
    <Route path="/users/:id"  component={UsersShowRedux} />

    <Route path="/posts" component={PostsListRedux} exact={true} />
    <Route path="/posts/:id" component={PostsShowRedux} />
    </div>
    </BrowserRouter>
  )
}


export default App


