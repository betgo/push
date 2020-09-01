import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import {withRouter,NavLink} from 'react-router-dom';

@withRouter
@inject("store")
@observer
export default class TopMenu extends Component {
    render() {
        return <div className="top-menu">
            {this.props.store.top_menu_links && this.props.store.top_menu_links.map(item =>
                <div className="menu-item">
                    <NavLink to="item.link">
                        {item.text}
                    </NavLink>
                </div>)}
        </div>;
    }
}