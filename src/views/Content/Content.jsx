import React from 'react';
import Header from '../../components/Header/Header.jsx';
import Article from '../../components/Article/Article.jsx';

class Content extends React.Component {
  render() {
    return (
      <div data-reactroot>
        <Header search={this.props.location.search}/>
        <Article id={this.props.match.params.id} />
      </div>
    )
  }
}

export default Content