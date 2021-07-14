import { TextField, FormGroup } from '@material-ui/core'
import React, { useState,useEffect,useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalState'
import { CancelButton, SubmitButton, MyLink } from '../styledComponents/style'


const EditUser = (props) => {
  const [selectedUser, setSelectedUser] = useState({
    id: "",
    name:""
  });
  const { users,editUser } = useContext(GlobalContext);
  const history = useHistory();
  const currentUserId = props.match.params.id;

  useEffect(() => {
    const userId = currentUserId;
    const selectUser = users.find(user => user.id === userId);
    setSelectedUser(selectUser);
  }, [currentUserId, users])
  
  const handleChange = (e) => {
    setSelectedUser({...selectedUser,[e.target.name]:e.target.value})
  }

  const onSubmit = () => {
    editUser(selectedUser);
    history.push("/")
  }
  return (
    <form onSubmit={onSubmit}>
      <FormGroup>
        <TextField value={selectedUser.name} name="name" onChange={handleChange}  label="Name" variant="filled" size="small" />
      </FormGroup>
      <SubmitButton variant="contained" color="primary" type="submit">
        Update
      </SubmitButton>
      <MyLink to="/" style={{textDecoration:"none", marginLeft:10}}>
        <CancelButton variant="contained" color="secondary" >
          Cancel
        </CancelButton>
      </MyLink>
    </form>
    
  )
}

export default EditUser