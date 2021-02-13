import React, { Component } from 'react';

class Inner extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isShow: true
        }

        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        const { item } = this.props
        console.log(this.props);
        const body = this.state.isShow && <div>
            <div className="image-wrapper">
                <img className="image" src={item.image} alt="pic" />
            </div>
            <div className="title">{item.title}</div>
            <div className="description">{item.description}</div>
            <button className="add-btn">купить</button>
        </div>

        return (
            <div className="inner__item">
                {body}
                <button className="remove-card" onClick={this.handleClick}>
                    {this.state.isShow ? 'delete' : 'recover'}
                </button>
            </div>
        )

    }

    handleClick = () => {
        console.log('clicked');
        this.setState({
            isShow: !this.state.isShow
        });
    }
}

export default Inner;