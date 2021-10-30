import React, { Component } from 'react'
import loading from "./loading.gif"

export class Spinner extends Component {
    render() {
        return (
            <div>
                <img src={loading} alt="loading" style={{ margin: "47px 0px"}} />
            </div>
        )
    }
}

export default Spinner
