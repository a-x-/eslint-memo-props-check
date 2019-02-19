import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const Foo = React.memo(function Foo (props) {
  // setup hooks: useState,,,
  return <div>{ renderPhoto() }</div>;

  function renderPhoto () {
    return <div>{ props.renderPhotoTools() }</div>;
  }
  // handlers
});

Foo.propTypes = {
  renderPhotoTools: PropTypes.func, // @returns {React.Node}
};

export default Foo;
