import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as homeActions from '../../Redux/HomeScreen/actions'
import './style.css';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        axios.get('https://fool.com/investing-news/articles_by_page')
            .then((response) => {
                this.setState({ res: response });
            })
            .catch((error) => {

            })
    }

    gotoArticleList = () => {
        this.props.history.push('/pwa/list');
    }

    render() {
        return (
            <div>
                <div className="fool-header">
                    <img className="logo-img" src="https://g.foolcdn.com/art/fool15/bg/fool-logo.png" />
                </div>
                <div className="color-line">
                    <div className="color blue-b"></div>
                    <div className="color yellow-b"></div>
                    <div className="color red-b"></div>
                    <div className="color green-b"></div>
                    <div className="color blue-b"></div>
                    <div className="color yellow-b"></div>
                </div>
                <div className="market-performance">
                    <div style={{ marginLeft: '6px' }} className="bottom-line bold">
                        MARKET PERFORMANCE
                    </div>
                    <div className="row">
                        <div className="column">

                        </div>
                        <div className="column bold blue">
                            Fool100
                        </div>
                        <div className="column bold">
                            S&P 500
                        </div>
                    </div>
                    <div className="row">
                        <div className="column grey">
                            Today
                        </div>
                        <div className="column green bold">
                            0.0%
                        </div>
                        <div className="column red bold">
                            0.0%
                        </div>
                    </div>
                    <div className="row">
                        <div className="column grey">
                            1 year
                        </div>
                        <div className="column green bold">
                            26%
                        </div>
                        <div className="column green bold">
                            20%
                        </div>
                    </div>
                    <div className="row">
                        <div className="column grey">
                            5 years
                        </div>
                        <div className="column green bold">
                            115%
                        </div>
                        <div className="column green bold">
                            84%
                        </div>
                    </div>
                </div>

                <article>
                    <div className="card-image">
                        <div>
                            <img src="https://g.foolcdn.com/image/?url=https%3A%2F%2Fg.foolcdn.com%2Feditorial%2Fimages%2F473811%2Fan-oil-pump-with-stacks-of-100-bills-in-the-back-ground.jpg&h=450&w=600&op=resize" alt="An oil pump with stacks of $100 bills in the back ground." />
                        </div>
                    </div>
                    <div className="text">
                        <h4><div>Yandex Caps a Stellar Year With More Market-Share Gains</div></h4>
                        <div className="story-date-author">Steve Symington | February 16, 2018</div>
                    </div>
                </article>

                <article>
                    <div className="card-image">
                        <div>
                            <img src="https://g.foolcdn.com/image/?url=https%3A%2F%2Fg.foolcdn.com%2Feditorial%2Fimages%2F473870%2Fcourtroom-gettyimages-78494709.jpg&h=450&w=600&op=resize" alt="Courtroom GettyImages-78494709" />
                        </div>
                    </div>
                    <div className="text">
                        <h4><div>Yandex Caps a Stellar Year With More Market-Share Gains</div></h4>
                        <div className="story-date-author">Steve Symington | February 16, 2018</div>
                    </div>
                </article>

                <article>
                    <div className="card-image">
                        <div>
                            <img className="card-image" src="https://g.foolcdn.com/image/?url=https%3A%2F%2Fg.foolcdn.com%2Feditorial%2Fimages%2F473665%2Fcustomers-checkout-after-shopping-walmarts-black-friday-event-on-thursday-nov-26-in-rogers-ark.jpg&h=450&w=600&op=resize" alt="Yandex" />
                        </div>
                    </div>
                    <div className="text">
                        <h4><div>Yandex Caps a Stellar Year With More Market-Share Gains</div></h4>
                        <div className="story-date-author">Steve Symington | February 16, 2018</div>
                    </div>
                </article>

                <article>
                    <div className="card-image">
                        <div>
                            <img src="https://g.foolcdn.com/image/?url=https%3A%2F%2Fg.foolcdn.com%2Feditorial%2Fimages%2F473866%2Fmarket-rally-gettyimages-658082608.jpg&h=450&w=600&op=resize" alt="Market rally GettyImages-658082608" />
                        </div>
                    </div>
                    <div className="text">
                        <h4><div>Yandex Caps a Stellar Year With More Market-Share Gains</div></h4>
                        <div className="story-date-author">Steve Symington | February 16, 2018</div>
                    </div>
                </article>

                <div className="row">
                    <button type="button" className="article-btn" onClick={() => {
                        this.gotoArticleList()
                    }}>
                        Go to All Fool Articles
                    </button>
                </div>

                <div className="premium-service">
                    <div style={{ marginLeft: '12px' }} className="bottom-line bold">
                        PEIMIUM SERVICES
                    </div>
                    <div className="row">
                        <div className="column-premium half">

                        </div>
                        <div className="column-premium bold">
                            Return
                        </div>
                        <div className="column-premium bold">
                            S&P
                        </div>
                    </div>
                    <div className="row">
                        <div className="column-premium blue half">
                            <div className="bold">Stock Advisor</div>
                            <div className="grey small">Flagship service</div>
                        </div>
                        <div className="column-premium green bold">
                            318%
                        </div>
                        <div className="column-premium bold">
                            81%
                        </div>
                    </div>

                    <div className="row">
                        <div className="column-premium blue half">
                            <div className="bold">Rule Breakers</div>
                            <div className="grey small">High-growth stocks</div>
                        </div>
                        <div className="column-premium green bold">
                            144%
                        </div>
                        <div className="column-premium bold">
                            68%
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(state => ({

}), {
        ...homeActions
    })(HomeScreen)