import React, { Component } from 'react';
import { ReactComponent as PacmanSvg } from './pacman.svg';

import './style.css';


class Pacman extends Component {

    state = {
        direction: 'right',
        position: {
            top: 0,
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
        const currentTop = this.state.position.top;
        const currentLeft = this.state.position.left;
        const { step } = this.props;

        // 39 ArrowRight
        // 40 ArrowDown
        // 37 ArrowLeft
        // 38 ArrowUp

        if (event.key === "ArrowUp") {
            this.setState({
                direction: 'up',
                position: {
                    top: currentTop - step,
                    left: currentLeft
                }
            });
        } else if (event.key === "ArrowDown") {
            this.setState({
                direction: 'down',
                position: {
                    top: currentTop + step,
                    left: currentLeft
                }
            });
        } else if (event.key === "ArrowLeft") {
            this.setState({
                direction: 'left',
                position: {
                    top: currentTop,
                    left: currentLeft - step
                }
            });
        } else if (event.key === "ArrowRight") {
            this.setState({
                direction: 'right',
                position: {
                    top: currentTop,
                    left: currentLeft + step
                }
            });
        }
    }

    render() {
        const { direction, position } = this.state;

        return (
            <div
                ref={this.pacmanRef}
                className={`pacman pacman--${direction}`}
                tabIndex="0"
                onKeyDown={this.handleKeyDown}
                style={position}>
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