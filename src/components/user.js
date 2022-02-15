import React, { Component } from "react";
import { withStyles } from "@mui/styles";
import { connect } from "react-redux";
import { getUsers, updateUser } from "../actions/user";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";
import ListItemText from "@mui/material/ListItemText";
import TextField from "@mui/material/TextField";
import { list } from "../style/index";

class User extends Component {
  state = {
    updateUsers: [],
  };

  componentDidMount() {
    this.props.getUsers();
  }

  handleChange(user, e) {
    const { id } = user;
    const index = this.state.updateUsers.findIndex((user) => user.id === id);
    if (index === -1) {
      // add username
      this.setState({
        updateUsers: [
          ...this.state.updateUsers,
          { id: id, name: e.target.value },
        ],
      });
    } else {
      // update username
      this.setState({
        updateUsers: this.state.updateUsers.map((user, i) =>
          i === index ? { ...user, name: e.target.value } : user
        ),
      });
    }
  }

  update(user) {
    const { id } = user;
    const newUser = this.state.updateUsers.find((user) => user.id === id);
    if (newUser) this.props.updateUser(newUser);
  }

  render() {
    const classes = this.props.classes;
    return (
      <div>
        <Container>
          <Box sx={{ bgcolor: "#fafafa", px: 6, py: 2 }}>
            <List>
              {this.props.users &&
                Array.isArray(this.props.users) &&
                this.props.users.map((user) => {
                  return (
                    <ListItem key={user.id}>
                      <TextField
                        variant="outlined"
                        defaultValue={user.employee_name}
                        onChange={this.handleChange.bind(this, user)}
                      />
                      <ListItemText primary={user.newName} className={classes.space}/>
                      <Button
                        variant="outlined"
                        onClick={this.update.bind(this, user)}
                      >
                        Mettre à jour
                      </Button>
                    </ListItem>
                  );
                })}
            </List>
          </Box>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users.data,
  };
};

const userStyle = withStyles(list)(User);
export default connect(mapStateToProps, { getUsers, updateUser })(userStyle);
