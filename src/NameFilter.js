/**
 * Created by laoxuanshi on 2017/7/15.
 */
import React, {Component} from 'react';
import { render } from 'react-dom';
import {stu}  from './StudentScoreTable.js';

class NameFilter extends Component {
    constructor(props) {
        super(props);
    }

    nameChangeHandler(e) {
        stu.onNameChange(e.target.value);
    }

    render() {
        return (
            <div className="condition-item">
                <label>
                    <span>name：</span>
                    <input type="text" onChange={this.nameChangeHandler}/>
                </label>
            </div>
        )
    }
}

export default NameFilter;
