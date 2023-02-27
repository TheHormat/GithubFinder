import React, { Component } from "react";
import User from "./User";

export class UserList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        {
          id: "88937250",
          name: "Hormat Hamidov",
          username: "HormatHamidov",
          avatar_url: "https://avatars.githubusercontent.com/u/88937250?v=4",
          github_url: "https://github.com/HormatHamidov",
          bio: "Full Stack Developer",
          followers: "7",
          following: "13",
        },
        {
          id: "1",
          name: "Hormat Hamidov",
          username: "HormatHamidov",
          avatar_url: "https://avatars.githubusercontent.com/u/88937250?v=4",
          github_url: "https://github.com/HormatHamidov",
          bio: "Full Stack Developer",
          followers: "7",
          following: "13",
        },
        {
          id: "2",
          name: "Hormat Hamidov",
          username: "HormatHamidov",
          avatar_url: "https://avatars.githubusercontent.com/u/88937250?v=4",
          github_url: "https://github.com/HormatHamidov",
          bio: "Full Stack Developer",
          followers: "7",
          following: "13",
        },
      ],
    };
  }
  render() {
    return (
        <div>
            {this.state.users.map(user => (
                <User user = {user} key={user.id} />
            ))}
        </div>
        )
  }
}

export default UserList;
