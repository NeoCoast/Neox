import fromJS from '..';

describe('fromJS function', () => {
  test('should return an object with the required methods', (done) => {
    const state = fromJS({});

    expect(state).toBeInstanceOf(Object);

    expect(state.toJS).toBeDefined();
    expect(state.values).toBeDefined();
    expect(state.set).toBeDefined();

    expect(state.toJS).toBeInstanceOf(Function);
    expect(state.values).toBeInstanceOf(Map);
    expect(state.set).toBeInstanceOf(Function);

    done();
  });
});
