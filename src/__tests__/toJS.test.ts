import fromJS from '..';
import StateObject from './interfaces';
import Neox from '../ts/interfaces/Neox';

describe('toJS function', () => {
  let state : Neox;
  const initialState : StateObject = {
    year: 2020,
    username: 'tintef',
    test: 'maurocen',
    data: {
      testingLibrary: 'jest',
    },
    numbers: [4, 8, 15, 16, 23, 42],
  }

  beforeAll(() => {
    state = fromJS(initialState);
  });

  test('should return an object', (done) => {
    expect(state.toJS()).toBeInstanceOf(Object);

    done();
  });

  test('should return the same keys', (done) => {
    const newState : StateObject = state.toJS();

    expect(Object.keys(newState)).toEqual(Object.keys(initialState))

    done();
  });

  test('should return the same values', (done) => {
    const newState : StateObject = state.toJS();

    expect(Object.values(newState)).toEqual(Object.values(initialState))

    done();
  });

  test('should maintain inner references unchanged', (done) => {
    const newState : StateObject = state.toJS();

    expect(newState.data).toBe(initialState.data);
    expect(newState.numbers).toBe(initialState.numbers);

    done();
  });
});
