import React, { Component } from 'react';
import classNames from 'classnames';
import './Image.css';


export default class Image extends Component {
  state = {
    active: false,
    infoVisible: false,
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleShowInfo = this.handleShowInfo.bind(this);
  }

  handleClick(event) {
    const active = this.state.active ? false : true;
    this.setState({
      active: active,
    });
  }

  handleShowInfo() {
    this.setState({
      infoVisible: !this.state.infoVisible,
    })
  }

  getCoordinates(element) {
    const devicePixelRatio = window.devicePixelRatio || 1;
    const rect = element.getBoundingClientRect;
    return {
      top: rect.top / devicePixelRatio,
      right: rect.right / devicePixelRatio,
      bottom: rect.bottom / devicePixelRatio,
      left: rect.left / devicePixelRatio,
      width: (rect.right - rect.left) / devicePixelRatio,
      height: (rect.bottom - rect.top) / devicePixelRatio,
    }
  }

  render() {
    const props = this.props;
    const style = {
      backgroundColor: props.color,
      backgroundImage: `url(${props.src.small})`,
    };
    const fullStyle = {
      backgroundImage: `url(${props.src.full})`,
    };

    var classes = classNames({
      Image: true,
      'is-active': this.state.active,
    });

    const infoClasses = classNames({
      'Image-info': true,
      'is-active': this.state.infoVisible,
    })

    const paths = [];

    for (let prop in props.src) {
      paths.push(<div className="Image-info-text" key={prop}>
        <div className="Image-info-text-label">
          {prop}
        </div>
        <div className="Image-info-text-content">
          {props.src[prop]}
        </div>
      </div>);
    }

    return (
      <figure
        className={classes}
        title={'By ' + props.username}>

        <div className="Image-small" style={style} onClick={this.handleClick}></div>
        {
          this.state.active &&
          <div className="Image-full" style={fullStyle}>
            <figcaption className="Image-caption">
              {'By ' + props.username}
            </figcaption>

            <div className="Image-blob Image-back" onClick={this.handleClick}>
              👈
            </div>

            <div className="Image-infoWrapper">
              <div className="Image-blob Image-i" onClick={this.handleShowInfo}>👏 Info</div>
              <div className={infoClasses}>
                <div className="Image-info-item">
                  👇 <a href={`${props.download}?force=true`}>Download image</a>
                </div>
                <div className="Image-info-item">
                  👉 <a href={props.href} target="_blank">Visit on Unsplash</a>
                </div>
                <div className="Image-info-item">
                  🙌 Copy path:
                  {paths}
                </div>
              </div>
            </div>
          </div>
        }
      </figure>
    );
  }
}
