import React from 'react';
import './App.css'

function App() {
    return (
        <div className="app-wrapper">
            <header className="header">
                <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="logo"/>
            </header>
            <nav className="nav">
                <div><a>Profile</a></div>
                <div><a>Messages</a></div>
                <div><a>News</a></div>
                <div><a>Music</a></div>
                <div><a>Settings</a></div>
            </nav>
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
