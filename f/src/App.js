import React, { Component } from "react";
import axios from "axios";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom"
import Login from "./pages/Login";

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      activeMember: {
        name: "",
        prename: "",
        password: "",
        email: "",
        birth : null,
      },
    };
  }

  handleSubmitAddMember = (item) => {
    axios
      .post("/api/members/", item)
  };

  verificationMember = (item) => {
    let indexArobase = item.email.indexOf("@");
    item.email = item.email.slice(0, indexArobase);
    axios.get("/api/hello-world/"+item.email)
      .then(response => {
        console.log("now"+response.data.password);
        return response.data.password;
      })
      .catch(error => {
        console.log(error);
      });
  }
 
  render() {
    const router = createBrowserRouter([
    {
      path : "/login",
      element : <Login onSave={this.handleSubmitAddMember} verify={this.verificationMember}/>,
    },

    {
      path : "*",
      element : < Navigate to = "/login" />,
    }
    ])

    return (
      <RouterProvider router={router} />
    )
  }
}

export default App;
