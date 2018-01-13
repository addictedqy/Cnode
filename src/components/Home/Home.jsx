import React from 'react';
import Header from '../Header/Header.jsx';
import TopicList from '../../views/TopicList/TopicList.jsx';

class Home extends React.Component {
  render() {
    return (
      <div data-reactroot="">
        <Header />
        <TopicList />
      </div>
    )
  }
}

export default Home