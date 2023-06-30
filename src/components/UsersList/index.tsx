import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import { getAllUsers } from '../../utils/getAllUsers';

export default function UsersList({ users }: any) {
  const [checked, setChecked] = React.useState([1]);

  console.log('users', users);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {users.map((value: any) => {
        const labelId = `checkbox-list-secondary-label-${value.id}`;
        const id = value.id;
        return (
          <ListItem
            key={value.id}
            secondaryAction={
              <Checkbox
                edge="end"
                onChange={handleToggle(value)}
                checked={checked.indexOf(value) !== -1}
                inputProps={{ 'aria-labelledby': labelId }}
              />
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemAvatar>
                {/* <Avatar
                  alt={`Avatar n°${value + 1}`}
                  src={`/static/images/avatar/${value + 1}.jpg`}
                /> */}
              </ListItemAvatar>
              <ListItemText id={labelId} primary={`User with ID: ${id}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
