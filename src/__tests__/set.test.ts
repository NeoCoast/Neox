import fromJS from '..';
import StateObject from './interfaces';
import Neox from '../ts/interfaces/Neox';

describe('set function', () => {
  test('should set a new value', (done) => {
    const state : Neox = fromJS({});
    let newState : StateObject = state.toJS();

    expect(newState.year).toBeUndefined();

    state.set('year', 2020);
    newState = state.toJS();

    expect(newState.year).toBeDefined();
    expect(newState.year).toBe(2020);

    done();
  });

  test('should set the object with its reference', (done) => {
    const state : Neox = fromJS({});
    let newState : StateObject = state.toJS();
    const data : Object =  { library: 'jest' };
    const numbers : Array<number> = [4, 8, 15, 16, 23, 42];

    expect(newState.data).toBeUndefined();
    expect(newState.numbers).toBeUndefined();

    state.set('data', data);
    state.set('numbers', numbers);

    newState = state.toJS();

    expect(newState.data).toBeDefined();
    expect(newState.data).toBe(data);
    expect(newState.numbers).toBeDefined();
    expect(newState.numbers).toBe(numbers);

    done();
  })
});
