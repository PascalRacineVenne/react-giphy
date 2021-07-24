import React from 'react';
import Gif from './gif';


const GifList = (props) => {
  return (
    <div className="gif-list">
      {props.gifs.map(gif => <Gif id={gif} key={gif} selectGif={props.selectGif} />)}
    </div>
  );
};

// class GifList extends Component {
//   renderList = () => {
//     return this.props.gifs.map(gif => <Gif id={gif.id} key={gif.id} choosenGif={props.choosenGif} />);
//   }

//   render () {
//     // need an array of ID
//     return (
//       <div className="gif-list">
//         {this.renderList()}
//       </div>
//     );
//   }
// }

export default GifList;
