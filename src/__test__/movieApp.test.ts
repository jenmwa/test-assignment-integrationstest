/**
 * @jest-environment jsdom
 */

import { init } from "../ts/movieApp";

jest.mock('../ts/services/movieservice');


 test('should create Html correctly', () => {
    init();

    let movies = document.querySelectorAll('h3');

    expect(movies.length).toBe(4);
 })