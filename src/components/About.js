import React from "react";
import { Outlet } from "react-router-dom";
import ProfileFunction from "./Profile";
import ProfileClass from "./ProfileClass";

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        <h1>About</h1>
        <p>This is Food Villa restaurant</p>
        {/* <Outlet /> */}
        <ProfileFunction name="rahul" surname="rautwar" />
        <ProfileClass name="rahul" surname="rautwar" />
      </div>
    );
  }
}

export default About;
