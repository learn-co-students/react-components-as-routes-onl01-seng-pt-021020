import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Signup from "./Signup";
import Messages from "./Messages";


// const link = {
//   width:'100px',
//   padding:'12px',
//   margin: '0 6px 6px',
//   background: 'blue',
//   textDecoration: 'none',
//   color: 'white',
// };

// const Navbar= () => 
//   <div>
//     <NavLink
//       to="/"
//       exact
//       style={link}
//       activeStyle={{
//         background: 'darkblue'
//       }}
//       >Home</NavLink>
//       <NavLink
//       to="/about"
//       exact
//       style={link}
//       activeStyle={{
//         background: 'darkblue'
//       }}
//       >About</NavLink>
//       <NavLink
//       to="/login"
//       exact
//       style={link}
//       activeStyle={{
//         background: 'darkblue'
//       }}
//       >Login</NavLink>
//       <NavLink
//       to="/signup"
//       exact
//       style={link}
//       activeStyle={{
//         background: 'darkblue'
//       }}
//       >Sign Up</NavLink>
//       <NavLink
//       to="/messages"
//       exact
//       style={link}
//       activeStyle={{
//         background: 'darkblue'
//       }}
//       >Messages</NavLink>

    
//   </div>


// const Home = () => {
//   return (
//     <div>
//       <h1>Home!</h1>
//     </div>
//   );
// };

// const About = () => {
//   return (
//     <div>
//       <h1>This is my about component!</h1>
//     </div>
//   );
// };

// const Login = () => {
//   return (
//     <div>
//       <form>
//         <div>
//           <input type="text" name="username" placeholder="Username" />
//           <label htmlFor="username">Username</label>
//         </div>
//         <div>
//           <input type="password" name="password" placeholder="Password" />
//           <label htmlFor="password">Password</label>
//         </div>
//         <input type="submit" value="Login" />
//       </form>
//     </div>
//   )
// }

// const Signup = () => {
//   return (
//     <div>
//       <h2>Sign Up Form</h2>
//       <form>
//         <div>
//           <input type="text" name="username" placeholder="Username" />
//           <label htmlFor="username">Username</label>
//         </div>
//         <div>
//           <input type="password" name="password" placeholder="Password" />
//           <label htmlFor="password">Password</label>
//         </div>
//         <input type="submit" value="Sign up!" />
//       </form>
//     </div>
//   )
// }

// const Messages = () => {
//   return (
//     <div>
//       <h2>Messages</h2>
//       <ul>
//         <li>sadkdhksjahdkas</li>
//         <li>sadasdadadas</li>
//       </ul>
//     </div>
//   );
// };


ReactDOM.render((
  <Router>
    <div>
      <Navbar />
      <Route exact path='/' component={Home} />
      {/* <Route path="/" render={()=><h1>Header</h1>}/> */}
      <Route exact path='/about' component={About} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/messages' component={Messages} />
      <Route exact path='/signup' component={Signup} />
    </div>
  </Router>
),
  document.getElementById('root')
);
