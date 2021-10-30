import React, { Component } from 'react'
import ReadNavBar from './ReadNavBar'
import News from './News'

export class Read extends Component {
    constructor(props){
        super(props);
        this.state={
            pageSize: 25,
        }
    }
    render() {
        return (
            <div>
                <ReadNavBar/>
                <News pageSize={this.state.pageSize} category={this.props.category} notPresent={this.props.notPresent} apiKey={this.props.apiKey}/>
            </div>
        )
    }
}

export default Read
