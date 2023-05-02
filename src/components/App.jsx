import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Searchbar />
        <ImageGallery />
      </div>
    );
  }
}
