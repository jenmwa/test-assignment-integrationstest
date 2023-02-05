/**
 * @jest-environment jsdom
 */

import * as movieApp from '../ts/movieApp';
import { movies } from "../ts/services/__mocks__/movieservice";

beforeEach(() => {
    document.body.innerHTML = "";
});

jest.mock('../ts/services/movieservice');

/*************************************************************************************************************
 * ******************************** function init ***************************************************
 *************************************************************************************************************/

test('should call on handleSubmit', () => {
  
  //arrange
  document.body.innerHTML = `
    <form id="searchForm">
      <input type="text" id="searchText" placeholder="Skriv titel här" />
      <button type="submit" id="search">Sök</button>
    </form>
    `;
  const spyOnhandleSubmit = jest.spyOn(movieApp, 'handleSubmit').mockReturnValue(new Promise<void>((resolve) => {
    resolve();
  }));

  //act
  movieApp.init();
  const searchForm: HTMLFormElement = document.querySelector('#searchForm') as HTMLFormElement;
  searchForm.submit();

  //assert
  expect(spyOnhandleSubmit).toHaveBeenCalled();
  spyOnhandleSubmit.mockRestore();

});

/*************************************************************************************************************
 * ******************************** function handleSubmit ***************************************************
 *************************************************************************************************************/

describe('should test the handleSubmit function', () => {

  test('should call createHtml if searchText is submitted', async () => {
    
    //arrange
    document.body.innerHTML = `
    <form id="searchForm">
        <input type="text" id="searchText" placeholder="Skriv titel här" />
        <button type="submit" id="search">Sök</button>
    </form>
    <div id="movie-container"></div>
    `;

    const spyOnCreateHtml = jest.spyOn(movieApp, "createHtml").mockReturnValue(); 
    const searchText: HTMLInputElement = document.querySelector("#searchText") as HTMLInputElement;
    searchText.value =  'Almost Famous';

    //act
    await movieApp.handleSubmit();

    //assert
    expect(spyOnCreateHtml).toBeCalled();
    spyOnCreateHtml.mockRestore();

  })

  test('should call on displayNoResult if searchText is empty', async () => {

    //arrange
    document.body.innerHTML = `
    <form id="searchForm">
        <input type="text" id="searchText" placeholder="Skriv titel här" />
        <button type="submit" id="search">Sök</button>
    </form>
    <div id="movie-container"></div>
    `;
    
    const spyOnDisplayNoResult = jest.spyOn(movieApp, 'displayNoResult').mockReturnValue();
    const searchText: HTMLInputElement = document.querySelector("#searchText") as HTMLInputElement;
    searchText.value =  '';

    //act
    await movieApp.handleSubmit();

    //assert
    expect(spyOnDisplayNoResult).toHaveBeenCalled();
    spyOnDisplayNoResult.mockRestore();

  });

  test('should call on displayNoResult if error', async () => {

    //arrange
    document.body.innerHTML = `
    <form id="searchForm">
        <input type="text" id="searchText" placeholder="Skriv titel här" />
        <button type="submit" id="search">Sök</button>
    </form>
    <div id="movie-container"></div>
    `;

    const spyOnDisplayNoResult = jest.spyOn( movieApp, 'displayNoResult').mockReturnValue();
    const searchText: HTMLInputElement = document.querySelector("#searchText") as HTMLInputElement;
    searchText.value =  'error';

    //Act
    await movieApp.handleSubmit();

    //assert
    expect(spyOnDisplayNoResult).toHaveBeenCalled();
    spyOnDisplayNoResult.mockRestore();

  });
  
});


/*************************************************************************************************************
 * ******************************** function createHtml ***************************************************
 *************************************************************************************************************/

 test('should create Html correctly', () => {
  
  //arrange
  document.body.innerHTML = `<div id="movie-container"></div>`;
  const movieContainer = document.querySelector('#movie-container') as HTMLDivElement;

  //act
  movieApp.createHtml(movies, movieContainer);

  //assert
  expect(movieContainer.innerHTML).toContain('div');
  expect(movieContainer.innerHTML).toContain('h3');
  expect(movieContainer.innerHTML).toContain('img');
  expect(movieContainer.innerHTML).toContain('Almost Famous');
});


/*************************************************************************************************************
 * ******************************** function displayNoResult ***************************************************
 *************************************************************************************************************/

test('should display a "No results" message ', () => {
  //arrange
  document.body.innerHTML = `<div id="movie-container"></div>`;
  const movieContainer = document.querySelector('#movie-container') as HTMLDivElement;
  
  //act
  movieApp.displayNoResult(movieContainer);

  //assert
  expect(movieContainer.innerHTML).toEqual('<p>Inga sökresultat att visa</p>');

  });