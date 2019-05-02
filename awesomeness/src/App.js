import React, { Component, Fragment } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import theme  from './theme';
const GlobalStyle = createGlobalStyle`
 body {
        padding: 0;
        margin: 0;
    }
`;

const Card = styled.div`
  background-color: red;
`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: pink;
  ${Card}{
    background-color:blue;
  }
`;


const Button = styled.button`
  background-color: ${props => props.theme.succesColor};
  border:0;
  border-radius: 30px;
  padding: 25px 15px;
`;
class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyle />
        <Container>
          <Form />
        </Container>
      </Fragment>
      </ThemeProvider>
    );
  }
}

const Form = () => (
  <Card>
    <Button>hello</Button>
  </Card>
);

export default App;
