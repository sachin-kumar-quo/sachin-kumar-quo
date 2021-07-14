import { List, } from '@material-ui/core'
import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
import { CancelButton, EditButton, MyListItem, Text, MyLink } from '../styledComponents/style';
import SetBackground from './SetBackground';

const UserList = () => {
  const { users, removeUser } = useContext(GlobalContext);
  return (
    <List >
      {users.map(user => {
        return (
          <MyListItem divider={true} key={user.id}>
            <Text variant="h5">
              {user.name}
            </Text>
            <MyLink to={`/edit/${user.id}`} style={{textDecoration:"none"}}><EditButton variant="contained">Edit</EditButton></MyLink>
            <CancelButton onClick={()=>removeUser(user.id)} variant="contained">Delete</CancelButton>
          </MyListItem>
        )
      })}
      </List>
  )
}

export default SetBackground(UserList);
