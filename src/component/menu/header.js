import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="ramu-header">
                <div className="ramu-header__title">
                    라무라쿠
                </div>
                <div className="ramu-header__menu">
                    <div className="ramu-header__menu--item">
                        브랜드소개
                    </div>
                    <div className="ramu-header__menu--item">
                        메뉴
                    </div>
                    <div className="ramu-header__menu--item">
                        인테리어
                    </div>
                    <div className="ramu-header__menu--item">
                        가맹점
                    </div>
                    <div className="ramu-header__menu--ham"/>
                </div>
            </div>
        );
    }
}

export default Header;