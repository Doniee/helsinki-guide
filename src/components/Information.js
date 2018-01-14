import React from 'react';
import styled from 'styled-components';
import ArticleTitle from './ArticleTitle';
import informationData from '../information.json';

const Article = styled.article`
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
  padding: 10px;
`;

export default () => (
  <main>
    {informationData.topics.map(item => (
      <Article key={item.id}>
        <ArticleTitle>{item.title}</ArticleTitle>
        <p>{item.text}</p>
      </Article>
    ))}
  </main>
);
