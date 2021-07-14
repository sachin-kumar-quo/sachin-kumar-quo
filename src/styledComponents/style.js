import { AppBar, Button ,ListItem, Typography,} from "@material-ui/core";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const CancelButton = styled(Button)`
  && {
    background:#ff0000;
  }
`;

export const SubmitButton = styled(Button)`
  && {
    background:#87ceeb;
    margin-top:2px;
  }
`;

export const EditButton = styled(Button)`
  && {
    background:#A3EBB1;
    margin-right:4px;
  }
`;

export const MyListItem = styled(ListItem)`
  &&{
    border-width:2px;
    border-color: #FF0000;
  }
`;

export const MyAppBar = styled(AppBar)`
  && {
    background:#21B6A8;
  }
`;

export const Text = styled(Typography)`
  && {
    flex-grow:1;
    text-align:left;
    font-weight:bold;
  }
`;
export const MyLink = styled(Link)`
  && {
    text-decoration:none;
    margin-left:4px;
  }
`;