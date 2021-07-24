import React, { Component } from 'react';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';


class App extends Component {
  render() {
    const gifs = [
      { id: "hrnD0PSI57M6Q" },
      { id: "13UoiCY2pJSwZW" },
    ];

    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id="hrnD0PSI57M6Q" />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={gifs} />
        </div>
      </div>
    );
  }
}

export default App;
