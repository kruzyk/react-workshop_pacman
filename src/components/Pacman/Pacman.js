import React, { Component } from 'react';
import { ReactComponent as PacmanSvg } from './pacman.svg';

import './style.css';


class Pacman extends Component {

    state = {
        direction: 'right',
        position: {
            top: 50,
            left: 0
        }
    }

    constructor(props) {
        super(props);
        this.pacmanRef = React.createRef();
    }

    componentDidMount() {
        this.pacmanRef.current.focus();
    }
    // dla hooków: import { useRef, useEffect } from 'react';
    // const pacmanRef = useRef(null);
    // i w useEffect { pacmanRef.current.focus(); }

    handleKeyDown = (event) => {
        console.log(event.keyCode, event.key);
    }

    render() {
        return (
            <div
                ref={this.pacmanRef}
                className="pacman"
                tabIndex="0"
                onKeyDown={this.handleKeyDown}
                style={this.state.position}>
                <PacmanSvg />
            </div>
        )
    }
}

Pacman.defaultProps = {
    step: 50,
    size: 50, // pacman size is 50x50px
    //TODO: move to config
    border: 10 * 2,
    topScoreBoardHeight: 50
}

export default Pacman;