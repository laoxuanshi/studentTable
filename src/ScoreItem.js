/**
 * Created by laoxuanshi on 2017/7/15.
 */
import React, {Component} from 'react';
import { render } from 'react-dom';
import emitter from './event';

class ScoreItem extends Component {
    constructor(props) {
        super(props);
    }

    onItemChange(entry) {
        emitter.emit('ItemDelete', entry);
    }

    render() {
        return (
            <tr >
                <td>{this.props.scoreItem.name}</td>
                <td>{this.props.scoreItem.gender}</td>
                <td>{this.props.scoreItem.chinese}</td>
                <td>{this.props.scoreItem.math}</td>
                <td><button onClick={this.onItemChange.bind(this, this.props.scoreItem._id)}>删除</button></td>
            </tr>
        )
    }
}

export default ScoreItem;
