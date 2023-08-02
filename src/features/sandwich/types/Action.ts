type Action =
  | { type: 'sandwich/add'; payload: string; quantity: number }
  | { type: 'sandwich/delete' };

export default Action;
