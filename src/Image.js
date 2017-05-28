import React, { Component } from 'react';
import classNames from 'classnames';
import './Image.css';

export default class Image extends Component {
  state = {
    active: false,
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    // console.log(event.target);
    // console.log(event.currentTarget);
    if (event.target === event.currentTarget) {
    }
    const active = this.state.active ? false : true;
    this.setState({
      active: active,
    });
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

    return (
      <figure
        className={classes}
        title={'By ' + props.username}
        onClick={this.handleClick}
      >
        <div className="Image-inner" style={style}>
          {this.state.active &&
            <div className="Image-full" style={fullStyle} />}
          <figcaption className="Image-caption">
            {'By ' + props.username}
          </figcaption>
          <div className="Image-blob Image-back" onClick={this.handleClick}>
            ↩
          </div>

          <div className="Image-btns">
            <a className="Image-blob Image-download" href={props.download}>↓</a>
            <a
              className="Image-blob Image-link"
              href={props.href}
              target="_blank"
            >
              →
            </a>
          </div>
        </div>
      </figure>
    );
  }
}
