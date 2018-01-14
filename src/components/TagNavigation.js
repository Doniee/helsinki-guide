import React, { Component } from 'react';
import styled from 'styled-components';
import Tag from './Tag';
import data from '../where-to-go.json';
import flatten from 'lodash/fp/flatten';
import uniq from 'lodash/fp/uniq';
import flow from 'lodash/fp/flow';
import map from 'lodash/fp/map';

const TagList = styled.ul`
  list-style-type: none;
  padding: 0;
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
`;

const NavTag = Tag.extend`
  cursor: pointer;
  background-color: ${props => (props.isSelected ? props.theme.turquoise : props.theme.yellow)};
  transition: border-radius 0.3s;

  &:hover {
    border-radius: 30px;
  }
`;

export default class TagNavigation extends Component {
  handleClick = e => {
    const clickedTag = e.target.innerText;
    let { selectedTags } = this.props;

    // Add clickedTag to selectedTags if it's not there yet, remove if it is
    if (selectedTags.indexOf(clickedTag) === -1) {
      selectedTags.push(clickedTag);
    } else {
      const i = selectedTags.indexOf(clickedTag);
      selectedTags.splice(i, 1);
    }

    this.props.onClickTag(selectedTags);
  };
  render() {
    // Get all tags, flatten it into a single array, get unique values, call with data
    const uniqueTags = flow(map(item => item.tags), flatten, uniq)(data.items);
    const { selectedTags } = this.props;

    return (
      <TagList>
        {uniqueTags.map(tag => {
          return (
            <NavTag
              key={tag}
              onClick={this.handleClick}
              isSelected={selectedTags.some(selectedTag => selectedTag === tag)}
            >
              {tag}
            </NavTag>
          );
        })}
      </TagList>
    );
  }
}
