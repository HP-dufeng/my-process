import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import blue from 'material-ui/colors/blue';
class LoginPage extends Component {
  render() {
    const classes = this.props.classes;

    return(
      <Grid container direction={'row'} justify={'center'} align={'center'} className={classes.root}>
        <Grid item>
          <Paper className={classes.paper} elevation={4}>
            <div className={classes.hgroup}>
              <Typography className={classes.typography} type="display1">Welcome</Typography>
            </div>
            <div className={classes.card}>
              <form className={classes.from}>
              <TextField
                label="Username"
                placeholder="Username"
                className={classes.username}
                margin="normal"
              />
              <TextField
                id="password"
                label="Password"
                className={classes.password}
                type="password"
                autoComplete="current-password"
                margin="normal"
              />
              <Button raised color="primary" className={classes.button}>
                Subscribe
              </Button>
              </form>
            </div>
            <div className={classes.powered}>
              <Typography  className={classes.typography} type="body1" gutterBottom>
                Powered by feng.du
              </Typography>
            </div>
          </Paper>
        </Grid>
      
    </Grid>
    );
  }
}

const styles = theme => ({
  // root:{
  //   minWidth: '450px'
  // },
  paper: {
    padding: 0,
    marginTop: theme.spacing.unit * 6,
    width: '400px',
  },
  hgroup:{   
    height:145,
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    background:theme.palette.primary['300'],
  },
  typography: {
    fontWeight:100,
    color:theme.palette.common.white
  },
  powered:{
    height:45,
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    background:theme.palette.primary['300'],
  },
  card:{
    height: 310,
    background: theme.palette.grey['50'],
  },
  from: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  username: {
    width: 330,
    marginTop: 50,
  },
  password: {
    width: 330,
    marginTop: 25,
  },
  button: {
    marginTop: 45,
    width: 195,
    height: 45,
  }
});


export default withStyles(styles)(LoginPage);
