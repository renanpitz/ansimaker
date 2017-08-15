import React, { Component } from 'react';
import { Link } from 'react-router';

export class Sidebar extends Component{

    render(){
        return(
            <div className="sidebar">
                <a className="logo" href="./">Ansimaker</a>
                <div className="routes">
                    <ul>
                        <li>
                            <Link to="/home">
                                <span className="icon-home3"></span> Home
                            </Link>
                        </li>
                        <li>
                            <Link to='/about'>
                                <span className="icon-equalizer"></span>Settings
                            </Link>
                        </li>
                        <li>
                            <Link to='/contributors'>
                                <span className="icon-users"></span>Contributors
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
