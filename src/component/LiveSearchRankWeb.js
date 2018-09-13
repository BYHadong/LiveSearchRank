import React, { Component } from 'react'

// css
import "./LiveSearchRankWeb.css"

// fonstawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'

export default class LiveSearchRankWeb extends Component {

    render() {
        return (
            <div>
                <div className="searchRankBoxWeb">
                    <div className="titleCheck">
                        <span className="rankTitleCheck">인기 검색어 순위</span>
                    </div>
                    <div className="showRank">
                        <FontAwesomeIcon icon={faAngleDown} color="#CCCCCC" size="lg" />
                    </div>
                </div>
                <div className="rankBox">
                    <span className="rankBoxTitle">인기 검색어 순위</span>
                    <div className="showRankBox">
                        <div className="rank">
                            <span className="rankNum">{this.props.rank[0]}</span>
                            <span className="rankNum">{this.props.rank[1]}</span>
                            <span className="rankNum">{this.props.rank[2]}</span>
                            <span className="rankNum">{this.props.rank[3]}</span>
                            <span className="rankNum">{this.props.rank[4]}</span>
                            <span className="rankNum">{this.props.rank[5]}</span>
                            <span className="rankNum">{this.props.rank[6]}</span>
                            <span className="rankNum">{this.props.rank[7]}</span>
                            <span className="rankNum">{this.props.rank[8]}</span>
                            <span className="rankNum">{this.props.rank[9]}</span>
                        </div>
                        <div className="rankTitle">
                            <span className="rankTitleText">{this.props.title[0]}</span>
                            <span className="rankTitleText">{this.props.title[1]}</span>
                            <span className="rankTitleText">{this.props.title[2]}</span>
                            <span className="rankTitleText">{this.props.title[3]}</span>
                            <span className="rankTitleText">{this.props.title[4]}</span>
                            <span className="rankTitleText">{this.props.title[5]}</span>
                            <span className="rankTitleText">{this.props.title[6]}</span>
                            <span className="rankTitleText">{this.props.title[7]}</span>
                            <span className="rankTitleText">{this.props.title[8]}</span>
                            <span className="rankTitleText">{this.props.title[9]}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
