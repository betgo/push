import React, { Component } from 'react';
import Hello from '../component/Hello';
import { inject } from 'mobx-react';
import { withRouter,Link } from 'react-router-dom';
import { Button, Intent, Spinner } from '@blueprintjs/core';
import SooloLayout from '../component/SoloLayout';

@withRouter
@inject("store")
export default class Index extends Component
{
    render()
    {
        return <div>
            <SooloLayout children={123}/>
        </div>;
    }
} 