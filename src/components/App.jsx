import { Component } from "react"
import { nanoid } from 'nanoid';
import { Form } from "./Form/Form"
import { ContactLIst } from "./ContactList/ContactList";

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: ''
}
onSubmit = (e) =>{
  e.preventDefault();
  const { name, contacts,number } = this.state;
  if (name.trim() === ''|| number.trim() === '') {
    return;
  }
  const existingContact = contacts.find((contact) => contact.name.toLowerCase() === name.trim().toLowerCase());
  if (existingContact) {
    alert('This contact already exists in the phonebook!');
    return;
  }
  const contact = {
    id: nanoid(),
    name: name.trim(),
    number: number.trim(),
  };
  this.setState({
    contacts: [...contacts, contact],
    name: '',
    number: '',
  });}

onChange = ({target}) => {
  this.setState({ [target.name]: target.value });
    }

onFilterChange = (e) => {
      this.setState({ filter: e.target.value });
    };
onDelete = (id) => {
      this.setState((prevState) => ({
        contacts: prevState.contacts.filter((contact) => contact.id !== id),
      }));
    };
render(){
  return (
    <>
    <Form onSubmit={this.onSubmit} onChange={this.onChange} name={this.state.name} number={this.state.number}/>
    <ContactLIst contacts={this.state.contacts} filter={this.state.filter} onFilterChange={this.onFilterChange} onDelete={this.onDelete}/>
    </>
  )
}
};

export default App;
