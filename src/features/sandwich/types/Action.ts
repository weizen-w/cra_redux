type Action =
  | { type: 'sandwich/add'; payload: number; value: string }
  | { type: 'sandwich/delete' };

export default Action;
