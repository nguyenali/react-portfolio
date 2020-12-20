import React from 'react';

function Header(props) {
    return (
        <div id="header">
            <div class="container">
                    <a href="http://itsrheine.github.io/react-portfolio" id="header-title">
                        Ali<a href='http://itsrheine.github.io/react-portfolio'>.</a>Nguyen
                    </a>
                    <ul id="header-nav">
                    {props.children}
                    </ul>
            </div>
        </div>
    );
}

export default Header;