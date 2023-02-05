import { getData } from '../ts/services/movieservice';
import { movies } from '../ts/services/__mocks__/movieservice';

jest.mock('axios', () => ({
  get: async (url:string) => {
    return new Promise ((resolve, reject) => {
      if (url.endsWith('error')) { 
        reject([]);
      }
      else {
        resolve ({data: {Search: movies}})
        // resolve (
        //  [
        //   {
        //     Title: 'Almost Famous',
        //     imdbID: 'tt0181875',
        //     Type: 'movie',
        //     Poster: '',
        //     Year: '2000'
        // },
        // {
        //     Title: 'Casablanca',
        //     imdbID: 'tt0034583',
        //     Type: 'movie',s
        //     Poster: '',
        //     Year: '1942'
        // },
        // {
        //     Title: 'The Crow',
        //     imdbID: 'tt0109506',
        //     Type: 'movie',
        //     Poster: '',
        //     Year: '1994'
        // },
        // ])
      }
    });
  }
}));

 test('should get data correctly', async () => {

  //act
  const result = await getData('text');

  //assert
  expect(result.length).toBe(3);
  expect(result[0].Title).toBe('Almost Famous'); 
 });

 test('should not get data', async () => {

  try {
    const result = await getData ('error');
  }

  catch(error: any){
    expect(error.length).toBe(0);
  }
  
 });