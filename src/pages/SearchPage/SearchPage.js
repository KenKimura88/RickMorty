import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { List, Spin, message, Icon } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';
import { searchCharacters, searchCharactersAlreadyListed } from './actions';
import CharacterCard from '../../components/CharacterCard';
import { LIST_GRID } from './constants';

import '../main.scss';
import './index.scss';

class SearchPage extends Component {
  state = {
    hasMore: true,
  };

  componentDidMount() {
    const {
      searchCharacters,
      match
    } = this.props;

    if (match && match.params) {
      searchCharacters(match.params.id);
    }
  }

  componentDidUpdate(prevProps) {
    const {
      searchCharacters,
      match
    } = this.props;
    if (prevProps.match.params.id !== match.params.id) {
      searchCharacters(match.params.id);
    }
  }

  handleInfiniteOnLoad = (index) => {
    const { characters, charactersApiInfo, searchCharacters } = this.props;
    if (index === 1) return;
    if (charactersApiInfo && charactersApiInfo.count === characters.length) {
      message.warning('Infinite List loaded all');
      this.setState({
        hasMore: false,
      });
      return;
    }
    searchCharacters(charactersApiInfo);
  };

  render() {
    const { scrollParentRef, handleInfiniteOnLoad } = this;
    const { characters, charactersLoading } = this.props;
    const { hasMore } = this.state;
    return (
      <div
        className="scrollbar-content"
        ref={(ref) => (this.scrollParentRef = ref)}>
        <InfiniteScroll
          initialLoad={true}
          pageStart={0}
          loadMore={handleInfiniteOnLoad}
          hasMore={!charactersLoading && hasMore}
          getScrollParent={() => scrollParentRef}
          useWindow={false}>
          <List
            dataSource={characters}
            grid={LIST_GRID}
            renderItem={(item) => (
              <List.Item key={item.id}>
                <CharacterCard character={item} />
              </List.Item>
            )}>
            {charactersLoading && hasMore && (
              <Spin
                indicator={
                  <Icon type="loading" style={{ fontSize: 24 }} spin />
                }
              />
            )}
          </List>
        </InfiniteScroll>
      </div>
    );
  }
}

SearchPage.propTypes = {
  characters: PropTypes.array,
  charactersApiInfo: PropTypes.object,
  charactersLoading: PropTypes.bool,
  searchCharacters: PropTypes.func,
  charactersLoaded: PropTypes.func,
};

const mapStateToProps = (state) => ({
  charactersLoading: state.searchPageReducer.charactersLoading,
  characters: state.searchPageReducer.characters,
  charactersApiInfo: state.searchPageReducer.charactersApiInfo,
});

const mapDispatchToProps = (dispatch) => ({
  searchCharacters: (index) => dispatch(searchCharacters(index)),
  searchCharactersAlreadyListed: () => dispatch(searchCharactersAlreadyListed()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPage);
