import React, {Component, Fragment} from 'react'
import './ContentRight.css'
import { SearchBlock } from "./searchBlock";
import {CategoriesBlock} from "./categoriesBlock";
import {SideWidgetBlock} from "./sideWidgetBlock";

export class ContentRight extends Component {

  render() {
    return (
      <Fragment>
        <SearchBlock/>
        <CategoriesBlock/>
        <SideWidgetBlock/>
      </Fragment>
    )
  }
}