import React, { Component } from 'react';
import { observer , inject } from 'mobx-react';
import TopMenu from './TopMenu';

@inject("store")
@observer
export default class TopNav extends Component
{
    render()
    {
        return <div className="top-nav">
            <div className="container">
                <div className="left">
                    <div className="log"><h1>server酱</h1></div>
                    <TopMenu/>
                </div>
                <div className="right">
                    登入登出
                </div>
            </div>
        </div>;
    }
}