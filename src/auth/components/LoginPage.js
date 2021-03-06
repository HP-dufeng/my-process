import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import purple from 'material-ui/colors/purple';

import LoginForm from './LoginForm';


class LoginPage extends Component {
  constructor(props, context) {
    super(props, context);
  }

  // componentWillMount() {
  //   const { from } = this.props.location.state || { from: { pathname: '/' } };
  //   const { authenticated } = this.props;
  //   if(authenticated){
  //       return (
  //           <Redirect to={from}/>
  //       );
  //   }
  // }

  render() {
    const classes = this.props.classes;

    return(
      <LoginForm />
    //   <Grid container direction={'row'} justify={'center'} className={classes.root}>
    //     <Grid item>
    //       <Paper className={classes.paper} elevation={4}>
    //         <div className={classes.header}>
    //           <Typography className={classes.typography} type="display1">Welcome</Typography>
    //         </div>
    //         <div className={classes.section}>
    //           <form className={classes.from}>
    //           <TextField
    //             label="Username"
    //             placeholder="Username"
    //             className={classes.username}
    //             margin="normal"
    //           />
    //           <TextField
    //             id="password"
    //             label="Password"
    //             className={classes.password}
    //             type="password"
    //             autoComplete="current-password"
    //             margin="normal"
    //           />
    //           <Button raised color="primary" className={classes.button} onClick= {this.onSubmit}>
    //             Subscribe
    //           </Button>
    //           </form>
    //         </div>
    //         <div className={classes.footer}>
    //           <Typography  className={classes.typography} type="body1" gutterBottom>
    //             Powered by feng.du
    //           </Typography>
    //         </div>
    //       </Paper>
    //     </Grid>
      
    // </Grid>
    );
  }
}

const basisColor = purple['A100'];

const styles = theme => ({
  root:{
    background: theme.palette.grey['200'],
    height: '100vh',
  },
  paper: {
    padding: 0,
    marginTop: theme.spacing.unit * 6,
    width: '400px',
  },
  header:{   
    height:145,
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    background:basisColor,
  },
  footer:{
    height:45,
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    background:basisColor,
  },
  section:{
    height: 310,
    background: theme.palette.grey['50'],
  },
  typography: {
    fontWeight:100,
    color:theme.palette.common.white
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
    // backgroundColor: lightBlue.A400,
  }
});

function mapStateToProps(state) {
  return { 
      authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(withStyles(styles)(LoginPage));
