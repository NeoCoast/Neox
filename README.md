<p align="center">
  <a href="https://github.com/NeoCoast/neox" target="_blank">
    <img width="250px" src="https://raw.githubusercontent.com/NeoCoast/neox/master/static/logo.svg">
  </a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@neocoast/neox">
    <img src="https://img.shields.io/npm/v/@neocoast/neox.svg"/>
    <img src="https://img.shields.io/npm/dm/@neocoast/neox.svg"/>
  </a>
</p>

# Neox

## Installation

```bash
npm install --save @neocoast/neox 
or
yarn add @neocoast/neox
```


## Usage

```js
import fromJS from '@neocoast/neox';

const state = fromJS({
  loading: false,
  username: null,
});

console.log(intialState);
// {values: Map(2), toJS: ƒ, set: ƒ}

console.log(state.values);
// Map(2) {"loading" => false, "username" => null}

console.log(state.toJS());
// {loading: false, username: null}

// Change username
state.set('username', 'tintef');

console.log(state.toJS());
// {loading: false, username: 'tintef'}


// Chained set calls
state.set('username', 'maurocen').set('loading', true);

console.log(state.toJS());
// {loading: false, username: 'maurocen'}
```


## Motivation

[ImmutableJS](https://immutable-js.github.io/immutable-js/) doesn't work well with [Redux's hooks](https://react-redux.js.org/api/hooks) -- see [this issue](https://github.com/reduxjs/redux/issues/3699).

Neox doesn't change the values references inside the object retrieved by the `toJS()` method and this allows the following comparisson:

```js
const state = fromJS({ arr: ['tintef', 'maurocen'] });

console.log(state.toJS().arr === state.toJS().arr);
// true
```

If you're currently using `Immutable`, an effect triggered by changes on `state.toJS().arr` will be triggered even when `arr`hasn't changed at all. This is because `Immutable`'s `toJS()` function changes the references of the internal values. `Neox` doesn't change the internal references unless `.set` is called. So your effect will only be triggered when you set a new array to it.


<p align="center" style="font-size: 10px; margin-top: 50px;">
Icons made by <a href=“https://www.flaticon.es/autores/freepik” title=“Freepik”>Freepik</a> from <a href=“https://www.flaticon.es/” title=“Flaticon”> www.flaticon.es</a>
<p align="center">
