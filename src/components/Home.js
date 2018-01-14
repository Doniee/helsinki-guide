import React, { Component } from 'react';
import styled from 'styled-components';
import TagNavigation from './TagNavigation';
import informationData from '../where-to-go.json';
import ArticleTitle from './ArticleTitle';
import Tag from './Tag';

const Main = styled.main`
  padding: 0 5px;
`;

const Article = styled.article`
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
  padding: 10px 0;
`;

const TagList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const Status = styled.p`
  text-align: left;
  max-width: 800px;
  margin: 10px auto 0 auto;
`;

export default class HomeContent extends Component {
  state = {
    selectedTags: []
  };

  toggleSelectedTags = selectedTags => {
    this.setState({ selectedTags });
  };

  render() {
    const { selectedTags } = this.state;
    let items;
    if (!selectedTags.length) {
      items = informationData.items;
    } else {
      items = informationData.items.filter(item =>
        item.tags.some(tag => selectedTags.includes(tag))
      );
    }

    return (
      <Main>
        <TagNavigation onClickTag={this.toggleSelectedTags} selectedTags={selectedTags} />
        <Status>
          Showing {items.length} / {informationData.items.length} places
        </Status>
        {items.map(item => (
          <Article key={item.id}>
            <ArticleTitle>{item.title}</ArticleTitle>
            <p>{item.text}</p>
            <TagList>
              {item.tags.map(tag => {
                // console.log(tag);
                return <Tag key={`${item.id}${tag}`}>{tag}</Tag>;
              })}
            </TagList>
          </Article>
        ))}
      </Main>
    );
  }
}
