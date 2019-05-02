import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import * as serviceWorker from './serviceWorker';
import Select from "react-select";

ReactDOM.render(<App />, document.getElementById('root'));

const options = [
    {value: 'Will Dingus', label: 'Dingus'},
    {value: 'James Poophead', label: 'Poophead'},
    {value: 'Marco The Departed', label: 'Departed'},
    {value: 'Nate Edwards', label: 'Nedwards'}
];

class Selector extends React.Component {
    state = {
        selectedOption: null,
    }
    handleChange = (selectedOption) => {
        this.setState({selectedOption});
        console.log('Option selected:', selectedOption);
    }
    render() {
        const { selectedOption } = this.state;

        return (
            <Select
                value={selectedOption}
                onChange={this.handleChange}
                options={options}
            />
        );
    }
}

export default Selector;
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
