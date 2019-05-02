import {Link} from "react-router-dom";
import React from 'react';
import Selector from '../index'
import Select from "react-select";

function Users() {
    render => {
        return (
            <div>
                <h2>Users</h2>
                <Select
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={options}
                />
            </div>
        );


    }
}

export default Users;