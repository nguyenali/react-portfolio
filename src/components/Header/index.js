import React from 'react';

function Header(props) {
    return (
        <div id="header">
            <div class="container">
                    <a href="https://nguyenali.github.io/react-portfolio/" id="header-title">
                        Ali<a href='https://nguyenali.github.io/react-portfolio/git'>.</a>Nguyen
                    </a>
                    <ul id="header-nav">
                    {props.children}
                    </ul>
            </div>
        </div>
    );
}

export default Header;