import React, { Component } from 'react';
import styles from '../styles/Home.module.css';

class HeaderComponent extends Component {
    render() {
        return (
            <header>
                <a href="/movies">Movies</a> | <a href="/characters">Characters</a>
            </header>
        )
    }
}
export default HeaderComponent