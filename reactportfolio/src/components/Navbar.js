import React from "react";
import Main from "./Main";
import {
  Layout,
  Header,
  Navigation,
  Drawer,
  Content,
  Textfield
} from "react-mdl";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      

            {/* Uses a header that scrolls with the text, rather than staying locked at the top */}
<div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="Title" scroll>
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <Main/>
            <div className="page-content" />
        </Content>
    </Layout>
</div>
</div>

  );
};

export default Navbar;
