/**
 * Created by laoxuanshi on 2017/7/15.
 */
import React, {Component} from 'react';
import { render } from 'react-dom';
import {stu}  from './StudentScoreTable.js';   //引入组件的句柄

class GenderFilter extends Component {
    constructor(props) {
        super(props);
        this.genderChangeHandler = this.genderChangeHandler.bind(this);
    }

    genderChangeHandler(e) {
        stu.onGenderChange(e.target.value);
    }

    render() {
        return (
            <div className="condition-item">
                <label>
                    <span>sex:</span>
                    <select  onChange={this.genderChangeHandler}>
                        <option value="0">All</option>
                        <option value="1">男生</option>
                        <option value="2">女生</option>
                    </select>
                </label>
            </div>
        )
    }
}

export default GenderFilter;
