import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import DocumentTitle from 'react-document-title';
import TopNav from './TopNav';
import Footer from './Footer';
@inject("store")
@observer
export default class SooloLayout extends Component {
    render() {
        const main = this.props.children? this.props.children:null;
        const title = this.props.title || "servers"
        return <DocumentTitle title={title}>
            <>
                <TopNav/>
                <div className="container">
                     <div className="main-page">{main}</div>  
                </div>
                     
                <Footer/>
                </>
        </DocumentTitle>
    }
}