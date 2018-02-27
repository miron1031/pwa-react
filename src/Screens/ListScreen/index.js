import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import renderHTML from 'react-render-html';
import JsxParser from 'react-jsx-parser'
import * as listActions from '../../Redux/ListScreen/actions'
import './style.css';

class ListScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listHtml: '',
            res: null,
            clone: null
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

    renderLinkList() {
        if (this.state.res != null) {
            var html = this.state.res.data.html;
            var articleList = html.match(/<article>([\s\S]*?)<\/article>/g);
            console.log("articlelist", articleList)


            var arr = this.state.res.data.html.split(" ");
            var list = [];
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].startsWith('href="')) {
                    var start = '';
                    var end = '';
                    for (let j = 0; j < arr[i].length; j++) {
                        if (arr[i][j] === '"') {
                            if (start === '') {
                                start = j;
                            }
                            else {
                                end = j;
                            }
                        }
                    }
                    var link = arr[i].substring(start + 1, end);
                    list.push('https://www.fool.com/amp' + link)
                }
            }
            console.log("listbutlength", list.length)
            var linkBuList = []
            linkBuList.push(
                <div>
                    <div className="fool-header">
                        <img className="logo-img" src="https://g.foolcdn.com/art/fool15/bg/fool-logo.png" onClick={() => {
                            this.props.history.push("/pwa/home")
                        }} />
                    </div>
                    <div className="color-line">
                        <div className="color blue-b"></div>
                        <div className="color yellow-b"></div>
                        <div className="color red-b"></div>
                        <div className="color green-b"></div>
                        <div className="color blue-b"></div>
                        <div className="color yellow-b"></div>
                    </div>
                </div>
            );
            for (let i = 0; i < list.length; i = i + 2) {
                let link = list[i]
                let article = articleList[i / 2].replace(/<a href([\s\S]*?)>/g, '<div>').replace(/<\/a>/g, '</div>')

                let articleDom = renderHTML(article);
                var clonedElementWithMoreProps = React.cloneElement(
                    articleDom.props.children[1].props.children[1],
                    { onClick: () => this.gotoArticle(link) }
                );
                articleDom.props.children[1].props.children[1] = clonedElementWithMoreProps


                console.log("clone", clonedElementWithMoreProps)
                // console.log(article);
                linkBuList.push(articleDom)

                // linkBuList.push(
                //     <div key={i}>
                //         <button style={{ fontSize: '20px', color: 'green', padding: '3px', margin: '5px' }} key={i} onClick={() => this.gotoArticle(link)}>
                //             {list[i]}
                //         </button>
                //     </div>
                // )

            }

            // this.setState({ listHtml: linkBuList })

            // console.log('render', renderHTML(this.state.listHtml)[0].props.children[1].props.children[1])



            // this.setState({ clone: clonedElementWithMoreProps })

            return linkBuList;
        }

    }

    gotoArticle = (link) => {
        console.log(link)
        this.props.saveURL(link);
        this.props.history.push('/pwa/article');
    }

    render() {

        return (
            <div id="articleList">
                {this.renderLinkList()}
            </div>
        );
    }
}

export default connect(state => ({
    url: state.listReducer.url
}), {
        ...listActions
    })(ListScreen)