import { IMovie } from '../ts/models/Movie';
import * as functions from '../ts/functions'

describe('movieSort', () => {
  test('should sort movies in descending order', () => {

    //arrange
    let movies: IMovie[] = [
        
        {
            Title: 'Casablanca',
            imdbID: 'tt0034583',
            Type: 'movie',
            Poster: '',
            Year: '1942'
        },
        {
            Title: 'Casablanca',
            imdbID: 'tt0034583',
            Type: 'movie',
            Poster: '',
            Year: '1942'
        },
        {
            Title: 'Almost Famous',
            imdbID: 'tt0181875',
            Type: 'movie',
            Poster: '',
            Year: '2000'
        },
        {
            Title: 'The Crow',
            imdbID: 'tt0109506',
            Type: 'movie',
            Poster: '',
            Year: '1994'
        },
       
    ];
    
    //act
    functions.movieSort(movies, true)
    
    //assert
    expect(movies[0].Title).toBe('Almost Famous');
    expect(movies[1].Title).toBe('Casablanca');
    expect(movies[2].Title).toBe('Casablanca');
    expect(movies[3].Title).toBe('The Crow');

  });

  test('should sort movies in ascending order', () => {

    //arrange
    let movies: IMovie[] = [
        
        {
            Title: 'Almost Famous',
            imdbID: 'tt0181875',
            Type: 'movie',
            Poster: '',
            Year: '2000'
        },
        {
            Title: 'The Crow',
            imdbID: 'tt0109506',
            Type: 'movie',
            Poster: '',
            Year: '1994'
        },
        {
            Title: 'Casablanca',
            imdbID: 'tt0034583',
            Type: 'movie',
            Poster: '',
            Year: '1942'
        },
        {
            Title: 'Casablanca',
            imdbID: 'tt0034583',
            Type: 'movie',
            Poster: '',
            Year: '1942'
        },
       
    ];
  
    //act
    functions.movieSort(movies, false);
    
    //assert
    expect(movies[0].Title).toBe('The Crow');
    expect(movies[1].Title).toBe('Casablanca');
    expect(movies[2].Title).toBe('Casablanca');
    expect(movies[3].Title).toBe('Almost Famous');
    
  });
});