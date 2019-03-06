import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Avatar } from 'antd';
import { COLORS, STATUS_CODE } from '../../constants';

const { Meta } = Card;

export default class CharacterCard extends Component {
  render() {
    const { character } = this.props;
    return (
      (character && (
        <Card
          style={{ width: 300 }}
          cover={
            <Link to={`/character/${character.id}`}>
              <figure className="character-card-container">
                <img src={character.image} alt="Thumb" />
              </figure>
            </Link>
          }>
          <Meta
            avatar={
              <Avatar
                style={{
                  border: `2px solid ${
                    character.status === STATUS_CODE.ALIVE
                      ? COLORS.ALIVE_COLOR
                      : character.status === STATUS_CODE.DEAD
                      ? COLORS.DEAD_COLOR
                      : COLORS.UNKNOWN_COLOR
                  }`,
                }}
                src={character.image}
              />
            }
            title={
              <Link to={`/character/${character.id}`}>{character.name}</Link>
            }
          />
        </Card>
      )) || <React.Fragment />
    );
  }
}
