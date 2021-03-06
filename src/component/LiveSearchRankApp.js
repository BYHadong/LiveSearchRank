import React, { Component } from 'react';

// css
import "./LiveSearchRankApp.css"

// fonstawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'

class LiveSearchRankApp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            check: false,
        }
        this.createDiv = this.createDiv.bind(this)
    }

    createDiv(e) {
        const target = e.target
        //  체크 박스 true false 체크
        this.setState({
            check: target.checked
        })
    }
    render() {
        if (this.state.check) {
            return (
                <div>
                    <input type="checkbox" id="_showCheckBox" onChange={this.createDiv} />
                    <label for="_showCheckBox">
                        <div className="_searchRankBoxApp" id="searchRankBox">
                            <div className="_titleCheck">
                                {console.log(this.state.check)}
                                <span className="_rankTitleCheck">인기 검색어 순위</span>
                            </div>
                            <div className="_showRank">
                                <FontAwesomeIcon icon={faAngleUp} color="blue" size="lg" />
                            </div>
                        </div>
                    </label>
                    <div className="_rankBox">
                        <div className="_rank">
                            {this.props.rank.map((data) => {
                                return (<span className="_rankNum">{data}</span>)
                            })}
                        </div>
                        <div className="_rankTitle">
                            {this.props.title.map((data) => {
                                return (<span className="_rankTitleText">{data}</span>)
                            })}
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <input type="checkbox" id="_showCheckBox" onChange={this.createDiv} />
                    <label for="_showCheckBox">
                        <div className="_searchRankBoxApp" id="searchRankBox">
                            <div className="_tag">
                                <span className="_tagText">인기</span>
                            </div>
                            <div className="_title">
                                <span className="_rank">{this.props.rank[0]}</span>
                                <span className="_rankTitle">{this.props.title[0]}</span>
                            </div>
                            <div className="_showRank">
                                <FontAwesomeIcon icon={faAngleDown} color="#CCCCCC" size="lg" />
                            </div>
                        </div>
                    </label>
                </div>
            )
        }
    }
}

export default LiveSearchRankApp;