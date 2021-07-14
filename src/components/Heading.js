import React from 'react';
import { Toolbar, Button } from '@material-ui/core';
import { Text, MyAppBar, MyLink } from '../styledComponents/style';


const Heading = () => {
  return (
    <MyAppBar position="static" color="secondary" >
      <Toolbar>
        <Text variant="h6">
          User List
        </Text>
        <MyLink to="/add" >
          <Button color="primary" variant="contained" >Add User</Button>
        </MyLink>
      </Toolbar>
    </MyAppBar>
  )
}

export default Heading
