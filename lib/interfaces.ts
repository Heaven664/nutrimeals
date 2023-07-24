export interface MealData {
  _id?: string;
  id: string;
  title: string;
  price: number;
  image: string;
  dairyFree: boolean;
  eggFree: boolean;
  glutenFree: boolean;
  peanutFree: boolean;
  vegetarian: boolean;
}

export interface MealsContextType {
  allMeals: MealData[];
  activeMeals: MealData[];
  changeActiveMeals: (meals: MealData[]) => void;
  changeAllMeals: (meals: MealData[]) => void;
  getDairyFreeMeals: () => void;
}
