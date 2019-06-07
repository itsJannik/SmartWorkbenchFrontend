import React from 'react';
import { Router, Route } from 'react-router-dom';
import uniqid from 'uniqid';
import history from '../history';
import location from '../location';

import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';
import Home from './Home';
import { convertToURLPath } from '../utils/URL'
import styled from 'styled-components';

const AppWrapper = styled.div`
  background-color: #ffffff;
  height: 100vh;
  width: 100vw;
  /* this is a grid container */
  display: grid;
  /* one grid-column */
  grid-template-columns: 100%;
  grid-template-rows: 10% 80% 10%;
  
  box-sizing: border-box;
    padding: 0;
    margin: 0;
`
class App extends React.Component {

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.redirectToHome = this.redirectToHome.bind(this);
    this.state = {
      data: [],
      isLoading: false,
      currentLocation: "",
      manualValue: "",
      manualIndex: 0,
      instructionIndex: 0,
    };
  }

  componentDidMount() {
    this.setState({
      // isLoading: true,
      currentLocation: location,
      manualValue: location.replace("/", "")
      // data: [],
    });
    /* fetch data here */
    // fetch("http://46.237.197.145:8080/Backend/webresources/generic")
    //   .then((response) => {
    //     if (response.status != 200) {
    //       console.log('Looks like there was a problem. Status Code: ' +
    //         response.status);
    //       return;
    //     }
    //     response.json()
    //     .then((data => {
    //       console.log(data);
    //     }));
    //   })
    // .catch(function(err) {
    //   console.log('Fetch Error :-S', err);
    // });

    // sobald uri von Lukas bekannt, die ID-Generierung in response verschieben

    let exampleData = [{
      manualTitle: "Legohaus bauen",
      manualInstructions: [
        {
          instructionTitle: "Dach bauen",
          instructionVisualization: "",
          instructionDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
        },
        {
          instructionTitle: "Mauer bauen",
          instructionVisualization: "",
          instructionDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
        },
        {
          instructionTitle: "Dach und Mauer zusammensetzen",
          instructionVisualization: "",
          instructionDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
        }
      ]
    },
    {
      manualTitle: "Legomännchen bauen",
      manualInstructions: [
        {
          instructionTitle: "Kopf und Körper zusammensetzen",
          instructionVisualization: "",
          instructionDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
        },
        {
          instructionTitle: "Körper und Beine zusammensetzen",
          instructionVisualization: "",
          instructionDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
        },
      ]
    },
    ];

    this.setState({ data: exampleData });
  }

  redirectToHome() {
    history.push("/");
    this.setState({
      currentLocation: "/",
      manualValue: ""
    })
  }

  onChange(event) {
    history.push(`/${event.target.value}`);
    console.log(event)
    console.log(event.target)
    this.setState({
      manualValue: event.target.value
    })
  }

  render() {
    const { data, manualValue, currentLocation } = this.state
    const manualTitles = data.map(({ manualTitle }) => manualTitle)
    return (
      <Router history={history} location={location}>
        <AppWrapper>
          <Header
            currentLocation={currentLocation}
            manualTitles={manualTitles}
            manualValue={manualValue}
            onChange={this.onChange}
            redirectToHome={this.redirectToHome}
          />
          <Route exact path="/"
            component={Home}
          />
          {
            data.map((manual) => (
              <Route
                path={`/${convertToURLPath(manual.manualTitle)}`}
                render={(props) => <Main manualInstructions={manual.manualInstructions} />
                }
                key={uniqid()} />
            ))
          }
          <Footer />
        </AppWrapper>
      </Router>
    );
  }
}

export default App;
