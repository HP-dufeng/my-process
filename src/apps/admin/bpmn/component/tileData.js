import React from 'react';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import StarIcon from 'material-ui-icons/Star';


export const mailFolderListItems = (
    <List>
    <ListItem button>
      <ListItemIcon>
        <StarIcon />
      </ListItemIcon>
      <ListItemText inset primary="Create Process" />
    </ListItem>
    <ListItem button>
      <ListItemText inset primary="Eric Hoffman" />
    </ListItem>
  </List>
)