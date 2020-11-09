import React from "react";

class Signup extends React.Component {
    render(){
        return (
          <div>
          <h2>Sign Up Form</h2>
          <form>
            <div>
              <input type="text" name="username" placeholder="Username" />
              <label htmlFor="username">Username</label>
            </div>
            <div>
              <input type="password" name="password" placeholder="Password" />
              <label htmlFor="password">Password</label>
            </div>
            <input type="submit" value="Sign up!" />
          </form>
        </div>
        );
      };
}

export default Signup