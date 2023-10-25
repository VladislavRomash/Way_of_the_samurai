import React from 'react';
import './App.css'
import {Header} from './components/Header';
import {Navigation} from './components/Navigation';

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navigation/>
            <div className="content">
                <img
                    src="https://png.pngtree.com/thumb_back/fh260/background/20200621/pngtree-abstract-modern-neon-frame-background-image_339537.jpg"
                    alt=""/>
                <div>ava+description</div>
                <div>My posts</div>
                <div> New post</div>
                <div>post_1</div>
                <div>post_2</div>
            </div>
        </div>
    );
}

export default App;
