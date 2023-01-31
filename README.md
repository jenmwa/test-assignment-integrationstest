# Inlämning - Integrationstester

Detta projekt skall fungera som mall för vad ni skall testa i denna del av kursen, asynkrona tester.

## Att göra

Klona ner detta repo och ta bort .git-mappen. Skapa ett eget repo och koppla det till er mapp (där det klonade projektet ligger). Nu har ni ett eget projekt att skriva tester för. Se till att ni installerar jest och alla beroenden som behövs för att kunna göra och köra era tester.

Ni behöver i detta projekt skriva tester som testar så många funktioner ni hinner i filerna:

- ts/movieApp.ts
- ts/functions.ts
- ts/services/movieservice.ts

Ni behöver inte testa main.ts i detta projekt.

## Förslag

Gå igenom koden i lugn och ro och se till att ni förstår vad den gör och hur information skickas till och från funktionerna i filerna. Börja därefter med att skriva tester för koden som är närmast datakällan, alltså movieservice.ts. Skriv därefter tester som använder sig av movieservice.ts och flytta er närmare och närmare webbläsaren. 

## Betygskriterier

För G:

- Skriv tester för minst 70% av funktionerna
- Skriva grundläggande integrationstester
- Använda enklare mock-objekt.
- Ha code coverage på minst 60%

För VG:

- Skriv tester för samtliga funktioner i filerna angivna ovan
- Bättre struktur på mock-objekten
- Kunna strukturera dina tester och visa på god förståelse i testerna.
- Ha code coverage på över 90%


##

# Testning

Set up kursen testning, Jenny Waller, fed22 Medieinstitutet 2023

## project structure

```bash
  (projectname)
    src
      index.html
      scss
        main.scss
      ts
        models
          IOmdbResponse.ts
          Movie.ts
        services
          __mocks__
            //create-mock-file.ts
          movieServices.ts
        functions.ts
        main.ts
        movieApp.ts
      __test__
        movieApp.ts
        functions.test.ts
  node_modules
  package.json
  package-lock.json
  tsconfig.json
  .parcelrc
  .gitignore

```

## install
install parcel
```bash
    npm install --save-dev parcel
```

install typescript
```bash
    npm install typescript
```
install sass
```bash
    npm i @parcel/transformer-sass
```
run development server
```bash
    npx parcel src/index.html --no-cache
```


## Install jest

npm install --save-dev jest

npm install --save-dev ts-jest

npm install --save-dev @types/jest

or, install them all together and once: 
```bash
  npm install --save-dev jest ts-jest @types/jest
```


## install jest-environment-dom


## Install jest

for jest test DOM:

```bash
  npm i --save-dev jest-environment-jsdom
```

i testfil allra högst upp OAVSETT vad, alltid rad 1 och som en kommentar: 
```bash
  /**
 * @jest-enviroment jsdom
 */
```

## configs

 I package.json:

```bash
  'jest': {
    'perset': 'ts-jest'
}
```
 I terminalen:

```bash
  npx jest
```
Förenkla och göra eget script i package.json:

```bash
  
  "scripts": {
    "test": "npx jest --watchAll"
  }
```

 därefter i terminalen:

```bash
  npx test
```





## Examples

examples test

```bash
  test('should add numbers correctly', () => {
    // 1.arrange
    let small = 4;
    let big = 4711;
    let sum= 0;

    //2. act
    sum = add(small, big);
    
    //3. assert
    expect(sum).toBe(4715);

});
```
    
## Matchers

Jest matchers are functions that make it easy to perform assertions in Jest test cases. They can be used to check that a value or expression meets certain conditions. Jest provides a wide variety of built-in matchers that can be used to check for different types of conditions.
Here are some common examples of Jest matchers:
* toBe: checks that two values are the same using the strict equality operator (===)
* toEqual: checks that two values are the same using the loose equality operator (==)
* toBeNull: checks that a value is null
* toBeUndefined: checks that a value is undefined
* toBeDefined: checks that a value is not undefined
* toBeTruthy: checks that a value is truthy (i.e. evaluates to true when used in a boolean context)
* toBeFalsy: checks that a value is falsy (i.e. evaluates to false when used in a boolean context)
* toContain: checks that an array or a string contains a specific element
* toThrow: checks that a function throws an error when called
* toMatch: checks that a string matches a regular expression
* toHaveBeenCalled: checks that a mock function has been called
* toHaveBeenCalledWith: checks that a mock function has been called with specific arguments
You can also chain matchers together, for example you can use toBeGreaterThan and toBeLessThan to check a value is within a certain range.
You can also create custom matchers by extending the expect API.
Jest also supports async tests, it provides resolves and rejects matchers to work with promise, resolves allows you to test if a promise is resolved and rejects allows you to test if a promise is rejected.
It's important to note that Jest matchers should be used inside of test cases, wrapped inside of the expect() function, like this: expect(value).toBe(expectedValue).







## Usage/Examples

```javascript
import { sendMessage } from "../ts/main";

test('should be what goes in', () => {
  let message = sendMessage('Hello World');
  expect(message).toBe('Hello World');

});
```

