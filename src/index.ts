interface Neox {
  values: Map<string, any>;
  toJS: () => object;
  set: (key: string, value: any) => Neox;
}

function fromJS(data: object): Neox {
  const values : Map<string, any> = new Map<string, any>(Object.entries(data));

  const state : Neox = {
    values,
    toJS: () => [...values.entries()].reduce((obj, [key, value]) => (obj[key] = value, obj), {}),
    set: null,
  };

  state.set = (key: string, value: any) => {
    values.set(key, value);
    return state;
  }

  return state;
};

export default fromJS;
