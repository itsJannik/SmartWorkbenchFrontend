import React from 'react';
import styled, { css } from 'styled-components';
import Content from './Content';

const StepButton = styled.a`
    text-decoration: none;
    display: inline-block;
    color: #777777;
    background-color: transparent;
    height: 20%;
    font-size: 10em;
    text-align: center;
    line-height: 0.4;
    border-radius: 10%;
    margin-right: 10%;
    margin-left: 10%;
    opacity: 0.5;
    &:hover {
        cursor: not-allowed;
    }
    ${({ clickable }) => clickable && css`
    &:hover {
      color: #eeeeee;
      background-color: #777777;
      cursor: pointer;
    }
    opacity: 1;
    background-color: #eeeeee;
  `}
`;

const MainWrapper = styled.main`
    display: grid;
    grid-template-columns: 12% 76% 12%;
    grid-template-rows: auto;
    align-items: center;
`;

const StartModal = styled.div`
    display: ${({ isModalVisible }) => isModalVisible ? `grid` : `none`};
    background: rgba(0,0,0,0.9);
    z-index: 1;
    position: absolute;
    height: 80%;
    width: 100%;
    grid-template-columns: auto;
    justify-items: center;
    align-items: center;
    transition-property: background-color;
    transition-duration: 2s;
`;

const PlayButton = styled.img`
    width: 30vh;
    height: 30vh;
    &:hover {
        cursor: pointer;
    }
`;

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.incrementStep = this.incrementStep.bind(this);
        this.decrementStep = this.decrementStep.bind(this);
        this.changeStep = this.changeStep.bind(this);
        this.startManual = this.startManual.bind(this);
        this.state = {
            step: 1,
            totalSteps: 1,
            isModalVisible: true,
        };
    }

    componentDidMount() {
        const { manualInstructions } = this.props;
        this.setState({
            totalSteps: manualInstructions.length
        });
    }

    async incrementStep() {
        const { step, totalSteps } = this.state;
        if (step < totalSteps) await this.changeStep(1);
        this.putData();
    }

    async decrementStep() {
        const { step } = this.state;
        if (step > 1) await this.changeStep(-1);
        this.putData();
    }

     changeStep(incrementBy) {
         this.setState((prevState) => {
            return { step: prevState.step + incrementBy };
        });
    }

    putData() {
        const { backEndUri, manualValue } = this.props;
        const { step } = this.state;
        const url = backEndUri;
        const data = {
            manual: manualValue,
            step: step
        };
        console.log("step sent to backend (put)", data.step);
        return fetch(url, {
            method: 'PUT',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .catch(function (err) {
            console.log('Fetch Error :-S', err);
          });
            // .then(response => {
            //     console.log(response);
            //     return response.body;
            // })
            // .then(responseBody => {
            //     console.log(responseBody);
            // })
    }


    startManual() {
        this.setState({
            isModalVisible: false
        });
        this.putData();
    }


    render() {
        const { step, totalSteps, isModalVisible } = this.state;
        return (
            <MainWrapper>
                <StepButton clickable={step > 1} onClick={this.decrementStep}>
                    &#8249;
            </StepButton>
                <Content {...this.props} step={step} />
                <StepButton clickable={step < totalSteps} onClick={this.incrementStep}>
                    &#8250;
            </StepButton>
                <StartModal isModalVisible={isModalVisible} >
                    <PlayButton onClick={this.startManual} src={"http://wptf.com/wp-content/uploads/2014/05/play-button.png"} alt={"starte Bauanleitung"} />
                </StartModal>
            </MainWrapper>
        )
    }
}

export default Main;
