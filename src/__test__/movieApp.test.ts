/**
 * @jest-environment jsdom
 */

import { IMovie } from "../ts/models/Movie";
import * as movieApp from '../ts/movieApp';

import { getData } from "../ts/services/__mocks__/movieserviceMock";

jest.mock('../ts/services/__mocks__/movieserviceMock');

beforeEach(() => {
    document.body.innerHTML = "";
});

 test('should create Html correctly', () => {
  
  //arrange
  const movies: IMovie[] = [{
    
      Title: 'Casablanca',
      imdbID: 'tt0034583',
      Type: 'movie',
      Poster: '',
      Year: '1942'
  
  }];
  document.body.innerHTML = `<div id="movie-container"></div>`;
  const movieContainer = document.querySelector('#movie-container') as HTMLDivElement;

  //act
  movieApp.createHtml(movies, movieContainer);

  //assert
  expect(movieContainer.innerHTML).toContain('Casablanca');
});



test('should display a "No results" message ', () => {
  //arrange
  document.body.innerHTML = `<div id="movie-container"></div>`;
  const movieContainer = document.querySelector('#movie-container') as HTMLDivElement;
  
  //act
  movieApp.displayNoResult(movieContainer);

  //assert
  expect(movieContainer.innerHTML).toEqual('<p>Inga sökresultat att visa</p>');

  });