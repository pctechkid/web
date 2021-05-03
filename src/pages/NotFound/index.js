import React, { Component } from "react";

import { Nav } from "../../components";

import "./index.css";

export default class NotFound extends Component {
  render() {
    return (
      <div className="NotFound">
        <Nav />
        <div className="nf">
          <div class="fof">
            <h1>Error 404</h1>
          </div>
        </div>
      </div>
    );
  }
}