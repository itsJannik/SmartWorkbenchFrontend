import React from 'react';
import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';
import styled from 'styled-components';

const AppWrapper = styled.div`
  background-color: #c19a6b;
`
class App extends React.Component {
  render() {
    return (
      <AppWrapper>
        <Header />
        <Main />
        <Footer />
      </AppWrapper>
    );
  }
}

export default App;
