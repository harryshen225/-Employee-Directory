import React, { Component } from 'react'
import TableContextProvider from './contexts/TableContext'
import TableFrameWork from './components/TableFrameWork'

export default class App extends Component {
  render() {

    return (

      <div className="ui container ">
        <div className="ui horizontal divider"> Employee Directory </div>
        <TableContextProvider>
          <TableFrameWork />
        </TableContextProvider>
        
      </div>
    )
  }
}
