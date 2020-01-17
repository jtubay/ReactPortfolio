import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  IconButton,
  CardText
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid" style={{paddingTop: '50px'}}>
            {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover"
              }}
            >
              React Project #1
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name="share"/>
            </CardMenu>
          </Card>
            {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover"
              }}
            >
              React Project #1
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name="share"/>
            </CardMenu>
          </Card>
            {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover"
              }}
            >
              React Project #1
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name="share"/>
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid" style={{paddingTop: '50px'}}>
        {/* Project 1 */}
      <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
        <CardTitle
          style={{
            color: "#fff",
            height: "176px",
            background:
              "url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover"
          }}
        >
          React Project #1
        </CardTitle>
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          sagittis pellentesque lacus eleifend lacinia...
        </CardText>
        <CardActions border>
          <Button colored>GitHub</Button>
          <Button colored>CodePen</Button>
          <Button colored>Live Demo</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
            <IconButton name="share"/>
        </CardMenu>
      </Card>
        {/* Project 2 */}
      <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
        <CardTitle
          style={{
            color: "#fff",
            height: "176px",
            background:
              "url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover"
          }}
        >
          React Project #1
        </CardTitle>
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          sagittis pellentesque lacus eleifend lacinia...
        </CardText>
        <CardActions border>
          <Button colored>GitHub</Button>
          <Button colored>CodePen</Button>
          <Button colored>Live Demo</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
            <IconButton name="share"/>
        </CardMenu>
      </Card>
        {/* Project 3 */}
      <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
        <CardTitle
          style={{
            color: "#fff",
            height: "176px",
            background:
              "url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover"
          }}
        >
          React Project #1
        </CardTitle>
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          sagittis pellentesque lacus eleifend lacinia...
        </CardText>
        <CardActions border>
          <Button colored>GitHub</Button>
          <Button colored>CodePen</Button>
          <Button colored>Live Demo</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
            <IconButton name="share"/>
        </CardMenu>
      </Card>
    </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid" style={{paddingTop: '50px'}}>
            {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover"
              }}
            >
              React Project #1
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name="share"/>
            </CardMenu>
          </Card>
            {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover"
              }}
            >
              React Project #1
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name="share"/>
            </CardMenu>
          </Card>
            {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover"
              }}
            >
              React Project #1
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name="share"/>
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div className="projects-grid" style={{paddingTop: '50px'}}>
            {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover"
              }}
            >
              React Project #1
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name="share"/>
            </CardMenu>
          </Card>
            {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover"
              }}
            >
              React Project #1
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name="share"/>
            </CardMenu>
          </Card>
            {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover"
              }}
            >
              React Project #1
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name="share"/>
            </CardMenu>
          </Card>
        </div>
      );
    }
  }
  render() {
    return (
      <div>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>Angular</Tab>
          <Tab>VueJs</Tab>
          <Tab>MongoDB</Tab>
        </Tabs>
       
          <Grid >
            <Cell col={12}>
              <div className="content">{this.toggleCategories()} </div>
            </Cell>
          </Grid>
       
      </div>
    );
  }
}

export default Projects;
