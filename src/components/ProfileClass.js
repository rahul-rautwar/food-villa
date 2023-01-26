import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 1,
      userInfo: {
        name: "dummy name",
        location: "location",
        avatar_url: "",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/rahul-rautwar");
    const json = await data.json();
    console.log(json);
    this.setState({ userInfo: json });
  }
  render() {
    return (
      <div>
        <h2>Profile Class component</h2>
        <img src={this.state?.userInfo?.avatar_url} />
        <h3>Name: {this.state?.userInfo?.name}</h3>
        <h3>Location: {this.state?.userInfo?.location}</h3>
      </div>
    );
  }
}

export default Profile;
