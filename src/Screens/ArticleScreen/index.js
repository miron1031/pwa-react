import React, { Component } from 'react';
import { AmpDocument } from '../../Components';
import { connect } from 'react-redux';

class ArticleScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <button onClick={() => { this.props.history.push('/pwa/list') }}>Back</button>
                <div>

                    <AmpDocument src={this.props.url} />
                </div>
            </div>
        );
    }
}

export default connect(state => ({
    url: state.listReducer.url
}))(ArticleScreen)