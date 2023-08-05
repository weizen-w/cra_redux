import { uid } from 'uid';
import Dish from './types/Dish';
import Action from './types/Action';

const initialState: Dish[] = [
  {
    id: uid(),
    title: '"Red fruits from the garden"',
    category: 'dessert',
    price: 40,
    image: 'https://avatars.dzeninfra.ru/get-zen_doc/3965361/pub_60a60e8eddb76a1023ad4777_60a60ebd2b5fbd2cdfa0de0a/scale_1200',
    description: '',
  },
];

export default function dishesReducer(
  state: Dish[] = initialState,
  action: Action
): Dish[] {
  switch (action.type) {
    case 'dishes/create':
      return [...state, { ...action.payload, id: uid() }];
    case 'dishes/delete':
      return state.filter((dish) => dish.id !== action.payload);
    case 'dishes/edit':
      return state.map((dish) =>
        dish.id === action.payload.id ? action.payload : dish
      );
    default:
      return state;
  }
}
