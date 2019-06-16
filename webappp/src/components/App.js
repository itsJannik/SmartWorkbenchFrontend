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
      backEndURI: "http://80.138.18.183:8080/Backend/webresources/generic"
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
    const {backEndURI} = this.state;
    fetch(backEndURI)
      .then((response) => {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }
        response.json()
        .then((data => {
          console.log(data);
        }));
      })
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });

    // sobald uri von Lukas bekannt, die ID-Generierung in response verschieben

    let exampleData = [{
      manualTitle: "Parallelschraubzwinge",
      manualInstructions: [
        {
          instructionTitle: "Schritt 1",
          instructionVisualization: "",
          instructionDescription: "Zwei Stahl-Backen entnehmen\nGegenüberliegend platzieren",
        },
        {
          instructionTitle: "Schritt 2",
          instructionVisualization: "",
          instructionDescription: "Eine Schraube entnehmen\nAn der vorderen Bohrung der rechten Backe ansetzen\nIn der gegenüberliegenden Bohrung der linken Backe verschrauben"
        },
        {
          instructionTitle: "Schritt 3",
          instructionVisualization: "",
          instructionDescription: "Eine Schraube entnehmen\nAn der hinteren Bohrung der linken Backe ansetzen\nIn der gegenüberliegenden Bohrung der rechten Backe verschrauben"
        }
      ]
    },
    {
      manualTitle: "Reisezahnbürste",
      manualInstructions: [
        {
          instructionTitle: "Schritt 1",
          instructionVisualization: "",
          instructionDescription: "Zahnbürste und Hülle entnehmen",
        },
        {
          instructionTitle: "Schritt 2",
          instructionVisualization: "",
          instructionDescription: "Zahnpasta entnehmen\nMit roter Kappe Deckel der Hülle einlegen\nHülle zusammenschieben und verschließen"
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
