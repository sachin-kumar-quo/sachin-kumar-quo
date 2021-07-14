import { TextField, FormGroup } from '@material-ui/core'
import React,{useContext,useState} from 'react'
import { useHistory } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalState'
import { v4 as uuid } from 'uuid';
import { CancelButton, SubmitButton, MyLink } from '../styledComponents/style';

const AddUser = () => {
  const [name, setName] = useState("");
  const { addUser } = useContext(GlobalContext);
  const history = useHistory();

  const handleChange = (e) => {
    setName(e.target.value);
    console.log(e.target.name)
  }

  const onSubmit = () => {
    const newUser = {
      id: uuid(),
      name
    }
    addUser(newUser);
    history.push("/")
  }
  return (
    <form onSubmit={onSubmit}>
      <FormGroup>
        <TextField value={name} onChange={handleChange}  label="Name" variant="filled" size="small" />
      </FormGroup>
      <SubmitButton  variant="contained" color="primary" type="submit">
        Submit
      </SubmitButton>
      <MyLink to="/" >
        <CancelButton variant="contained" color="secondary" >
          Cancel
        </CancelButton>
      </MyLink>
    </form>
    
  )
}

export default AddUser
