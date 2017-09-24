import React from 'react';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Drawer from 'material-ui/Drawer';



import { NavLink } from 'react-router-dom';
class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };

    this.handleToggle = this.handleToggle.bind(this);
  }



  handleToggle(){
     this.setState({open: !this.state.open});
  }


  render() {
    const classes = this.props.classes;



    return (
        <div  className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <IconButton className={classes.menuButton} color="contrast" aria-label="Menu" onClick={this.handleToggle}>
                <MenuIcon />
              </IconButton>
              <Typography type="title" color="inherit" className={classes.flex}>
                Title
              </Typography>
              <Button color="contrast" href="/login">Login</Button>
            </Toolbar>
          </AppBar>
          <Drawer open={this.state.open} onRequestClose={this.handleToggle}>
            <div role="button" onClick={this.handleToggle}>
              <Button>Item 1</Button>
            </div>
          </Drawer>
            {/* <NavLink to="/admin">Admin</NavLink>
            <p>Index</p> */}


        </div>
    );
  }
}

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3,
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

export default withStyles(styles)(Demo);
