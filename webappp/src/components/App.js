import React from 'react';
import { Router, Route } from 'react-router-dom';
import uniqid from 'uniqid';
import history from '../history';
import location from '../location';

import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';
import Home from './Home';
import HelpModal from './footer/HelpModal';
import { convertToURLPath } from '../utils/URL';
import styled from 'styled-components';

const AppWrapper = styled.div`
  background-color: #ffffff;
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 10% 80% 10%;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
`;


class App extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.redirectToHome = this.redirectToHome.bind(this);
    this.disableAsciiArtConsoleLog = this.disableAsciiArtConsoleLog.bind(this);
    this.showHelp = this.showHelp.bind(this);
    this.closeHelpModal = this.closeHelpModal.bind(this);
    this.state = {
      data: [],
      isLoading: false,
      currentLocation: "",
      manualValue: "",
      manualIndex: 0,
      instructionIndex: 0,
      backEndDomain: "http://46.237.197.145:8080/",
      backendPath: "Backend/webresources/instructions",
      showConsolelog: true,
      isHelpModalVisible: false
    };
  }

  componentDidMount() {
    this.setState({
      currentLocation: location,
      manualValue: location.replace("/", "")
    });
    const { backEndDomain, backendPath } = this.state;
    const backEndUri = backEndDomain + backendPath;
    fetch(backEndUri)
      .then((response) => {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' + response.status);
          return;
        }
        response.json()
          .then((data => {
            this.setState({ data });
          }));
      })
      .catch(function (err) {
        console.log('Fetch Error :-S', err);
      });

    if (this.state.showConsolelog) {
      console.log(`
╔═╗┌┬┐┌─┐┬─┐┌┬┐  ╦ ╦┌─┐┬─┐┬┌─┌┐ ┌─┐┌┐┌┌─┐┬ ┬
╚═╗│││├─┤├┬┘ │   ║║║│ │├┬┘├┴┐├┴┐├┤ ││││  ├─┤
╚═╝┴ ┴┴ ┴┴└─ ┴   ╚╩╝└─┘┴└─┴ ┴└─┘└─┘┘└┘└─┘┴ ┴ 
                                          
    ,(*,****,(,      .#&%%##%%*                     
       */,***,/,  %%/.    *%(%%(#%                  
        (,****,(            %#%%%#(%                
((#.      (,*****,(            ##%%%%%%#%*             
//**((  //*******,(           %%%%%%%%%%%#%,           
#*///************(          #%%%%%%%%%%%%%%%#         
(//////*****///(*(/          &%%%%%%%%%%%%%%%*       
 .(((//****//////*(.         ,#%%%%%%%%%%%%%        
        .*((*///////(      ,....%%%%%%%%%%%%%       
            /(/////(/(/  ,......,..&%%&*./%%%%%%%%  
              (//(//((/*......,.     .     %%%%%%%& 
                (///(*,.....,.            %%%%%%%%  
                *##*,,,,,,,*               .&%&(    
              ((/(*((,,,,/(/(*                      
            ##/(((((/#(////((/(                     
          ##((((((((((##/((/((/((                   
        ##((((((((((##. ((/(/(((/(*                 
      ###(##((((((##      ((((/(((/(((#(/*          
    ##########((##*        .(/(((((////////(/       
 .############(#.            *(//////////////(*     
.##############(               (////////((/#///(     
,##############*                 *(/////(/     /#(.    
###############                   /(////((              
.###########(                      (/////(*             
.########                         ((/////(/           
..,####,...                      .../#((((((, 
    
disable ASCII-Art Console Log 
by calling disableAsciiArtConsoleLog();
`);
    }
    window.disableAsciiArtConsoleLog = this.disableAsciiArtConsoleLog;
  }

  disableAsciiArtConsoleLog() {
    this.setState({
      showConsolelog: false
    });
    console.clear();
  }

  redirectToHome() {
    history.push("/");
    this.setState({
      currentLocation: "/",
      manualValue: ""
    });
  }

  onChange(event) {
    history.push(`/${event.target.value}`);
    this.setState({
      manualValue: event.target.value
    });
  }

  showHelp(event) {
    this.setState({ isHelpModalVisible: true });
  }

  closeHelpModal(event) {
    if (event.target.id === "help_modal") {
      this.setState({isHelpModalVisible:false});
    }
  }

  render() {
    const { 
      data, 
      manualValue, 
      currentLocation, 
      backEndDomain, 
      backendPath, 
      isHelpModalVisible } = this.state;
    const backEndUri = backEndDomain + backendPath;
    const manualTitles = data.map(({ manualTitle }) => manualTitle);
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
                render={(props) =>
                  <Main
                    manualInstructions={manual.manualInstructions}
                    backEndUri={backEndUri}
                    manualValue={manualValue}
                  />
                }
                key={uniqid()} />
            ))
          }
          <Footer onHilfe={this.showHelp} />
          <HelpModal isHelpModalVisible={isHelpModalVisible} closeHelpModal={this.closeHelpModal}/>
        </AppWrapper>
      </Router>
    );
  }
}

export default App;
