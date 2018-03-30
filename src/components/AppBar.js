import React from 'react';
import Button from 'muicss/lib/react/button';

export default class AppBar extends React.Component {
  render() {
    return <div>
      <div className="mui-appbar">
        <div className="left">
          <div className="back"><a href="https://oasisplatform.io">&laquo; OasisPlatform.io</a></div>
          <div className="mui--text-headline">Oasis Testnet Dashboard</div>
        </div>
        <div className="icons">
          {
            this.props.forceTheme
            ?
            <div className="icon">
              <a href="#" onClick={this.props.turnOffForceTheme}>
                <i className="material-icons">star_border</i><br />
                Turn off the Force theme
              </a>
            </div>
            :
            null
          }
        </div>
      </div>
    </div>
  }
}
