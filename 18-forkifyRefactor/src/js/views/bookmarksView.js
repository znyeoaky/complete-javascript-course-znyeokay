import icons from 'url:../../img/icons.svg'; // parcel 2
import View from './view';
import previewView from './previewView';

class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage =
    'No bookmarks yet! Find a nice recipe and bookmark it. 😻😻😻';
  _message = 'this is a message';

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkup() {
    // console.log(this._data); //test
    // console.log(this._data.map(this._generateMarkupPreview)); //test
    // return this._data.map(this._generateMarkupPreview).join(''); // simplify to follow
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  }
}
export default new BookmarksView();
