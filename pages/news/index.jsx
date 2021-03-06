import React, { Component, PropTypes } from 'react'
import DocumentTitle from 'react-document-title'

export default class News extends Component {
  render () {
    const {
      config
    } = this.props
    return (
      <DocumentTitle title={'News | ' + config.siteTitle} />
    )
  }
}

News.propTypes = {
  config: PropTypes.object
}
