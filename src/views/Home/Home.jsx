import React from 'react';
import Header from '../../components/Header/Header.jsx';
import TopicList from '../../components/TopicList/TopicList.jsx';

class Home extends React.Component {
  render() {
    return (
      <div data-reactroot="">
        <Header search={this.props.location.search}/>
        <TopicList search={this.props.location.search}/>
      </div>
    )
  }
}

export default Home