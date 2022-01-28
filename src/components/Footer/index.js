import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";

import { version } from "../../components";

const styles = (theme) => ({
  footer__container: {
    width: "100%",
    height: "75px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

class Footer extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div style={{ paddingTop: "75px" }}>
        <footer className={classes.footer__container} id="footer__container">
          <a
            className="no_decoration_link footer__text"
            href="#"
          >
            {`© 2022 Ronnel Omboy`}
          </a>
        </footer>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Footer);
