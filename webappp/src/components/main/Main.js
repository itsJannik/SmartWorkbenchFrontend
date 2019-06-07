import React from 'react';
import styled, { css } from 'styled-components';
import Content from './Content';

const StepButton = styled.a`
    text-decoration: none;
    display: inline-block;
    color: #777777;
    background-color: #eeeeee;
    height: 20%;
    font-size: 10em;
    text-align: center;
    line-height: 0.4;
    border-radius: 10%;
    margin-right: 10%;
    margin-left: 10%;

    ${({ clickable }) => clickable && css`
    &:hover {
      color: #eeeeee;
      background-color: #777777;
      cursor: pointer;
    }
  `}
`

const MainWrapper = styled.main`
    /* this is a grid container */
    display: grid;
    /* one grid-column */
    grid-template-columns: 10% 80% 10%;
    align-items: center;
`
const StartModal = styled.div`
    display: ${({ isModalVisible }) => isModalVisible ? `grid` : `none`};
    background: rgba(0,0,0,0.6);
    z-index: 1;
    position: absolute;
    height: 400px;
    width: 400px;
`
const PlayButton = styled.img`
    src: url(${props => props.src});
    width: 100px;
    height: 100px;
    alt: "start";
`

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.incrementStep = this.incrementStep.bind(this);
        this.decrementStep = this.decrementStep.bind(this);
        this.changeStep = this.changeStep.bind(this);
        this.state = {
            step: 1,
            totalSteps: 1,
            isModalVisible: true,
        }
    }

    componentDidMount() {
        const { manualInstructions } = this.props
        this.setState({
            totalSteps: manualInstructions.length
        })
    }

    incrementStep() {
        const { step, totalSteps } = this.state
        if (step < totalSteps) this.changeStep(1);
    }
    decrementStep() {
        const { step } = this.state
        if (step > 1) this.changeStep(-1);
    }

    changeStep(incrementBy) { this.setState((prevState) => ({ step: prevState.step + incrementBy })) }

    render() {
        const { step, totalSteps, isModalVisible } = this.state
        return (
            <MainWrapper>
                <StepButton clickable={step > 1} onClick={this.decrementStep}>
                    &#8249;
            </StepButton>
                <Content {...this.props} step={step} />
                <StepButton clickable={step < totalSteps} onClick={this.incrementStep}>
                    &#8250;
            </StepButton>
            <StartModal isModalVisible={isModalVisible}>
                <PlayButton src={"http://wptf.com/wp-content/uploads/2014/05/play-button.png"}/>
            </StartModal>
            </MainWrapper>
        )
    }
}

export default Main;
