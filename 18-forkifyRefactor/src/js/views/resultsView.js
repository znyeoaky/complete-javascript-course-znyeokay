import View from './view';
import icons from 'url:../../img/icons.svg'; // parcel 2

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage =
    'No recipe found for your query! Please try another one. 😿😿😿';
  _message = 'this is a message';

  _generateMarkup() {
    // console.log(this._data); //test
    // console.log(this._data.map(this._generateMarkupPreview)); //test
    return this._data.map(this._generateMarkupPreview).join('');
  }

  _generateMarkupPreview(data) {
    // console.log(data);
    return `
      <li class="preview">
        <a class="preview__link " href="#${data.id}">
          <figure class="preview__fig">
            <img crossorigin="anonymous" src="${data.image}" alt="${data.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${data.title}</h4>
            <p class="preview__publisher">${data.publisher}</p>
            <div class="preview__user-generated">
              <svg>
                <use href="${icons}#icon-user"></use>
              </svg>
            </div>
          </div>
        </a>
      </li>
    `;
  }
}
export default new ResultsView();
