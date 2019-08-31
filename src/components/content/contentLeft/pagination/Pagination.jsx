import React, {Component} from 'react'
import './Pagination.css'



export class Pagination extends Component {

  render() {
    return (
      <ul className="listUnstyled pagination">

        <li className="page-item">
          <a href="#" className="page-link">← Older</a>
        </li>

        <li className="page-item disabled">
          <a href="#" className="page-link">Newer →</a>
        </li>
      </ul>
    )
  }
}

