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
                            {this.props.rank.map((data) => {
                                return (<span className="_rankNum">{data}</span>)
                            })}
                        </div>
                        <div className="rankTitle">
                            {this.props.title.map((data) => {
                                return (<span className="_rankTitleText">{data}</span>)
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
