import React from "react"
import { Title, FormStyled, Input, Button, Label, Box } from './FormStyled'

export const Form = ({onSubmit, onChange, name, number})=> {
   return (
    <Box>
    <Title>Phonebook</Title>
    <FormStyled onSubmit={onSubmit}>
        <Label>
        Name
   <Input
   onChange={onChange}
    type="text"
    name="name"
    value={name}
    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    required
  />
  </Label>
  <Label>
  Number
  <Input
    onChange={onChange}
  type="tel"
  name="number"
  value={number}
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
</Label>
  <Button>Add Contact</Button>
   </FormStyled>
    </Box>
   )
}
