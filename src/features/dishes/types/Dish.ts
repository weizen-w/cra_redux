import DishDto from './DishDto';

export default interface Dish extends DishDto {
  id: string;
}

export type DishId = Dish['id'];
export type DishTitle = Dish['title'];
