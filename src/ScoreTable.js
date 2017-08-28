/**
 * Created by laoxuanshi on 2017/7/15.
 */
import React, {Component} from 'react';
import { render } from 'react-dom';
import ScoreItem  from './ScoreItem.js';
import {stu}  from './StudentScoreTable.js';
import emitter from './event';

class ScoreTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            delete:[]
        };
    }

    componentDidMount() {
        emitter.on('ItemDelete', (data) => {
            let arr = this.state.delete;
            arr.push(data);
            this.setState({delete:arr});
        });
    }

    render() {
        var scoreNotes = [];
        var afterFilter = this.props.items.filter((item) => {
            if(this.state.delete.indexOf(item._id) !== -1) {
                return false;
            } else if(stu.state.gender === '0') {
                return item.name.indexOf(stu.state.name) !== -1;
            } else if( stu.state.gender === '1'){
                return item.name.indexOf(stu.state.name) !== -1 && item.gender === '男';
            } else {
                return item.name.indexOf(stu.state.name) !== -1 && item.gender === '女';
            }
        });

        for(let i=0;i<afterFilter.length;i++) {
            scoreNotes.push(<ScoreItem scoreItem={afterFilter[i]} />)
        }

        return (
            <table>
                <thead>
                <tr>
                    <th>姓名</th>
                    <th>性别</th>
                    <th>语文</th>
                    <th>数学</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                {scoreNotes}
                </tbody>
            </table>
        )
    }
}

export default ScoreTable;
