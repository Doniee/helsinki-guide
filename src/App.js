import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import Information from './components/Information';

// eslint-disable-next-line
import { normalize } from 'polished';
import { injectGlobal } from 'styled-components';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';

const theme = {
  turquoise: '#3fbfb4',
  yellow: '#f7b733'
};

const Container = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto auto auto 1fr auto;
`;

injectGlobal`
  $ { normalize() }

  html {
    height: 100%;
  }

  body {
    text-align: center;
    font-family: 'Catamaran', sans-serif;
    padding-bottom: 50px;
    margin: 0;
    padding: 0;
    height: 100%;
  }

  p {
    margin: 5px 0;
  }
`;

class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <Container>
            <Header />
            <Nav />
            <Route exact path="/" component={Home} />
            <Route path="/useful-information" component={Information} />
            <Footer />
          </Container>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
