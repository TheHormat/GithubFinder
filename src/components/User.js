import React, { Component } from "react";

export class User extends Component {
  render() {
    const { avatar_url, name, bio, followers, following, github_url } =
      this.props.user;
    return (
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-3">
            <img
              className="img-fluid rounded-start avatar"
              src={avatar_url}
              alt={name}
            />
          </div>
          <div className="col-md-9">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <h3 className="card-title">{bio}</h3>
              <hr />
              <p>Followers: {followers}</p>
              <p>Following: {following}</p>
              <a
                className="btn btn-primary"
                target="_blank"
                href={github_url}
                rel="noreferrer"
              >
                Github Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
