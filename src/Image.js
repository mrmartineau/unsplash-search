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
    this.handleActive = this.handleActive.bind(this);
    this.handleShowInfo = this.handleShowInfo.bind(this);
  }

  handleActive(event) {
    this.setState(prevState => ({
      active: !prevState.active
    }));
  }

  handleShowInfo() {
    this.setState(prevState => ({
      infoVisible: !prevState.infoVisible
    }));
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
          <input type="text" value={props.src[prop]} readOnly />
        </div>
      </div>);
    }

    return (
      <figure
        className={classes}
        title={'By ' + props.username}>

        <div className="Image-small" style={style} onClick={this.handleActive}></div>
        {
          this.state.active &&
          <div className="Image-full" style={fullStyle}>
            <figcaption className="Image-caption">
              {'By ' + props.username}
            </figcaption>

            <div className="Image-infoWrapper">
              <div className="Image-blob Image-i" onClick={this.handleShowInfo}>
                <svg viewBox="0 0 32 32"><title>info</title><path d="M14 9.5c0-0.825 0.675-1.5 1.5-1.5h1c0.825 0 1.5 0.675 1.5 1.5v1c0 0.825-0.675 1.5-1.5 1.5h-1c-0.825 0-1.5-0.675-1.5-1.5v-1z"></path><path d="M20 24h-8v-2h2v-6h-2v-2h6v8h2z"></path><path d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13z"></path></svg>
              </div>
              <div className={infoClasses}>
                <div className="Image-info-item">
                  <a href={`${props.download}?force=true`}>Download image</a>
                </div>
                <div className="Image-info-item">
                  <a href={props.href} target="_blank" rel="noopener noreferrer">View on Unsplash</a>
                </div>
                <div className="Image-info-item">
                  {paths}
                </div>
              </div>
            </div>

            <button className="Image-blob Image-back" onClick={this.handleActive}>
              <svg viewBox="0 0 32 32"><title>Go back</title><path d="M16 32c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zM16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13-13-5.82-13-13 5.82-13 13-13z"></path><path d="M20.914 9.914l-2.829-2.829-8.914 8.914 8.914 8.914 2.828-2.828-6.086-6.086z"></path></svg>
            </button>
          </div>
        }
      </figure>
    );
  }
}
