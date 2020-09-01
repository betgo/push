import React, { Component } from 'react';
import { observer , inject } from 'mobx-react';

@inject("store")
@observer
export default class Footer extends Component
{
    render()
    {
        return <div className="title">footer</div>;
    }
}