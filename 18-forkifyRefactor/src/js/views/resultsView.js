import icons from 'url:../../img/icons.svg'; // parcel 2
import View from './view';
import previewView from './previewView';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage =
    'No recipe found for your query! Please try another one. 😿😿😿';
  _message = 'this is a message';

  _generateMarkup() {
    // console.log(this._data); //test
    // console.log(this._data.map(this._generateMarkupPreview)); //test
    // return this._data.map(this._generateMarkupPreview).join(''); // simplify to follow
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}
export default new ResultsView();
