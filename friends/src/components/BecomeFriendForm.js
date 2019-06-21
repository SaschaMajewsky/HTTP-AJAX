import React from 'react';
import { Form, FormGroup, Label, Input, Button} from "reactstrap";

class BecomeFriendForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friend: this.props.currentFriend || {
        name: "",
        age: "",
        email: ""
      }
    };
  }

  componentDidUpdate(before) {
    // not beforeFriend, not equal
    if (this.props.currentFriend && before.currentFriend !== this.props.currentFriend) 
    {
      this.setState({ friend: this.props.currentFriend });
    }
  }

  handleChange = event => {
    this.setState({
      friend: {
        ...this.state.friend,
        [event.target.name]: event.target.value
      }
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("WORKING", this.props.currentFriend)
    this.props.currentFriend ? this.props.updateFriend(this.state.friend.id, this.state.friend) : this.postFriend(event)
  }

  postFriend = event => {
    event.preventDefault();
    this.props.postFriend(this.state.friend);
    this.setState({ friend: { name: "", age: "", email: "" } });
  };

    render() {
      return (
      <Form onSubmit={this.handleSubmit} className="form-container">
        <FormGroup className="form-wrapper">
          <Label>Name:</Label>
          <Input type="text" name="name" value={this.state.friend.name} onChange={this.handleChange} placeholder="Hello, your name is:" />
          <Label>Age: </Label>
          <Input type="text" name="age" value={this.state.friend.age} onChange={this.handleChange} placeholder="How old are you?" />
          <Label>E-Mail: </Label>
          <Input type="email" name="email" value={this.state.friend.email} onChange={this.handleChange} placeholder="What is your email?" />
          <Button type="submit" className="md-button">{this.props.currentFriend ? "UPDATE" : "NEW"}</Button>
        </FormGroup>
      </Form>
      )
    }
 }

export default BecomeFriendForm;