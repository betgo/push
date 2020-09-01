import React, { Component } from 'react';
import { observer , inject } from 'mobx-react';

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
                </div>
                <div className="right">
                    登入登出
                </div>
            </div>
        </div>;
    }
}