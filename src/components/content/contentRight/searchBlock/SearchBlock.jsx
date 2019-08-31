import React, {Component, Fragment} from 'react'
import './SearchBlock.css'


export class SearchBlock extends Component {

  render() {
    return (
      <div className="card">

        <h5 className ="cardHeader">Search</h5>

        <div className ="cardBody">
          <div className="input-group">
            <input className="searchInput" type="text" placeholder="Search for..."/>
            <span>
              <button className="btnSearch">Go!</button>
            </span>
          </div>

        </div>
      </div>
    )
  }
}
