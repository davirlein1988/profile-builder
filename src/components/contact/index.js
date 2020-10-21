import React from 'react';
import { Container, Tree, Box, Row, Column, TitleWrapper, Title, Text, FormWrapper, Form } from "./styles/contact"

export default function Contact({children, ...restProps}) {
  return <Container {...restProps}>{children}</Container>
}

Contact.Tree = function({children, ...restProps}){
  return <Tree {...restProps}>{children}</Tree>
}
Contact.Box = function({children, ...restProps}){
  return <Box {...restProps}>{children}</Box>
}
Contact.Row = function({children, ...restProps}){
  return <Row {...restProps}>{children}</Row>
}
Contact.Column = function({children, ...restProps}){
  return <Column {...restProps}>{children}</Column>
}
Contact.TitleWrapper = function({children, ...restProps}){
return <TitleWrapper {...restProps}>{children}</TitleWrapper>
}
Contact.Title = function({children, ...restProps}){
return <Title {...restProps}>Hit me a Message</Title>
}
Contact.Text = function({children, ...restProps}){
  return <Text {...restProps}>{children}</Text>
}
Contact.FormWrapper = function({children, ...restProps}){
  return <FormWrapper {...restProps}>{children}</FormWrapper>
}
Contact.Form = function({
  rnName, 
  setRnName,
  rnEmail,
  setRnEmail,
  rnSubject,
  setRnSubject,
  rnMessage,
  setRnMessage,
  handleSubmit,
  ...restProps
}){

  return <Form {...restProps} onSubmit={handleSubmit}>
    <label htmlFor="item01">
      <input 
      type="text"
      name="name"
      id="item01"
      value={rnName}
      onChange={({target}) => setRnName(target.value)}
      placeholder="Jane Doe"
      />
    </label>
    <label htmlFor="item02">
      <input 
      type="text"
      name="email"
      id="item02"
      value={rnEmail}
      onChange={({target}) => setRnEmail(target.value)}
      placeholder="youremail@mail.com"
      />
    </label>
    <label htmlFor="item03">
      <input 
      type="text"
      name="subject"
      id="item03"
      value={rnSubject}
      onChange={({target}) => setRnSubject(target.value)}
      placeholder="Contact Reason"
      />
    </label>
    <label htmlFor="item04">
      <textarea 
      type="text"
      name="name"
      id="item04"
      value={rnMessage}
      onChange={({target}) => setRnMessage(target.value)}
      placeholder="Here goes a simple message"
      />
    </label>
    <button 
      className="rn-button-style--2 btn-solid" 
      type="submit" 
      value="submit" 
      name="submit" 
      id="mc-embedded-subscribe"
      >Submit</button>
  </Form>
}


