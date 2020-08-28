export default interface Neox {
  values: Map<string, any>;
  toJS: () => object;
  set: (key: string, value: any) => Neox;
}
