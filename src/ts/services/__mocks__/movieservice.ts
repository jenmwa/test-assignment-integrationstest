import { IMovie } from "../../models/Movie";

export let movies: IMovie[] = [
    {
        Title: 'Almost Famous',
        imdbID: 'tt0181875',
        Type: 'movie',
        Poster: '',
        Year: '2000'
    },
    {
        Title: 'Casablanca',
        imdbID: 'tt0034583',
        Type: 'movie',
        Poster: '',
        Year: '1942'
    },
    {
        Title: 'The Crow',
        imdbID: 'tt0109506',
        Type: 'movie',
        Poster: '',
        Year: '1994'
    },
    
];

export async function getData(searchText: string): Promise<IMovie[]> {
  return new Promise((resolve, reject) => {
    
    if (searchText !== 'error' && searchText !== '') {
      resolve(movies);
    }

    if (searchText === '') {
      resolve([]);
    }

    else {
      reject([]);
    }

  });
};


