import React from 'react'
import PropTypes from 'prop-types'

export default function App (props) {
  const { title, children } = props
  return (
    <React.Fragment>
      <h1
        style={{
          marginTop: '32px',
          marginBottom: '32px',
          paddingBottom: '8px',
          borderBottom: '1px solid lightgrey'
        }}
      >
        {title}
      </h1>
      <p>{children}</p>
    </React.Fragment>
  )
}

App.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string
}

App.defaultProps = {
  children: null,
  title: 'Hello, React!'
}
