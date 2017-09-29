import React from 'react';
import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';
import Collapse from 'material-ui/transitions/Collapse';

import StarBorder from 'material-ui-icons/StarBorder';

import person_jpg from '../static/images/person.jpg';

class UserAvatar extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = { open: false };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState({ open: !this.state.open });
      }

    render() {
        return (
            // <div>
            //     <Avatar alt="Remy Sharp" src={person_jpg}/>
            // </div>
            <List>
                <ListItem button onClick={this.handleClick}>
                {/* <ListItemIcon>
                <StarBorder />
                </ListItemIcon> */}
                <ListItemText >
                <Avatar alt="Remy Sharp" src={person_jpg}/>
                </ListItemText>
                {this.state.open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={this.state.open} transitionDuration="auto" unmountOnExit>
                <ListItem button >
                    <ListItemIcon>
                    <StarBorder />
                    </ListItemIcon>
                    <ListItemText inset primary="Starred" />
                </ListItem>
                </Collapse>
            </List>
        )
    }
}

const styles = {
    avatar: {
      margin: 10,
    },
  };

export default withStyles(styles)(UserAvatar);