import React, { Component } from 'react'
import './SideWidgetBlock.css'


export class SideWidgetBlock extends Component {

  render() {
    return (
      <div className="card">

        <h5 className ="cardHeader">Search</h5>

        <div className ="cardBody">

            You can put anything you want inside of these side widgets. They are easy to use,
            and feature the new Bootstrap 4 card containers!

        </div>
      </div>
    )
  }
}