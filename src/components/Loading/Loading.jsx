import React from 'react';
import loading from './loading.svg';

class Loading extends React.Component {
  render() {
    return (
      <div className="container loading">
        <img src={loading} />
      </div>
    )
  }
}

export default Loading