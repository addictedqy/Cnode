import React from 'react';
import Header from '../Header/Header.jsx';
import Article from '../../views/Article/Article.jsx';

class Content extends React.Component {
  render() {
    return (
      <div data-reactroot>
        <Header />
        <Article />
      </div>
    )
  }
}

export default Content