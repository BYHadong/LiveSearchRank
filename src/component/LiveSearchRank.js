import React, { Component } from 'react'
import Media from "react-media"

// compotnent
import LiveSearchRankWeb from "./LiveSearchRankWeb"
import LiveSearchRankApp from './LiveSearchRankApp';

export default class LiveSearchRank extends Component {

  render() {
    return (
      <Media query={{ minWidth: 360, maxWidth: 640 }}>
        {
          metches => metches ? (
            <LiveSearchRankApp rank={this.props.rank} title={this.props.title}></LiveSearchRankApp>
          ) : (
              <LiveSearchRankWeb rank={this.props.rank} title={this.props.title}></LiveSearchRankWeb>
            )
        }
      </Media>
    )
  }
}
