import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import uniqid from 'uniqid';

const HeaderWrapper = styled.header`
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: space-evenly;
    align-content: center;
    background-color: #777777;
    color: #eeeeee;
`

const HeaderDropdown = styled.select`
    background-color: #eeeeee;
    color: #777777;
    /* this should allow the dropdown to be scalable */
    -webkit-appearance: menulist-button;
`
const HeaderTitle = styled.h1`
    justify-self: start;
`

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: ""
        };
    }
    onChange = (e) => {
        this.props.history.push(`/${e.target.value}`);
        this.setState({
            selectedOption: e.target.value
        })
        console.log(e.target)
    }
    render() {
        const { manualTitles } = this.props
        return (            
            <HeaderWrapper>
                <HeaderTitle>
                    Smart Workbench
            </HeaderTitle>
                <HeaderDropdown  value={this.state.selectedOption} onChange={this.onChange}>
                    <option value="" hidden>Bauplan</option>
                    {manualTitles.map((manualTitle) => (
                        <option value={encodeURIComponent(manualTitle.toLowerCase())} 
                        key={uniqid()}
                        /*selected={encodeURIComponent(manualTitle.toLowerCase()) == this.state.selectedOption}*/>
                            {manualTitle}
                        </option>
                    ))}
                </HeaderDropdown>
            </HeaderWrapper>
        )
    }
}

// export default withRouter(Header);
export default withRouter(Header);