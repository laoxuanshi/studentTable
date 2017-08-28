/**
 * Created by laoxuanshi on 2017/7/15.
 */
import React, {Component} from 'react';
import { render } from 'react-dom';
import GenderFilter from './GenderFilter.js';
import NameFilter from './NameFilter.js';
import ScoreTable  from './ScoreTable.js';

export var stu;     //输出组件句柄
class StudentScoreTable extends Component {
    constructor(props) {
        super(props);
        stu = this;
        this.state = {
            name:'',
            gender:'0'
        };
    }

    onGenderChange(gender) {
        this.setState({gender: gender});

    }

    onNameChange(name) {
        this.setState({name: name});
    }

    render() {
        return (
            <div>
                <GenderFilter />
                <NameFilter/>
                <ScoreTable items={this.props.items}/>
            </div>
        )
    }
}

export default StudentScoreTable;
