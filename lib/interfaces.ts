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
  allDinnerLunchMeals: MealData[];
  activeDinnerLunchMeals: MealData[];
  changeActiveDinnerLunchMeals: (meals: MealData[]) => void;
  changeAllDinnerLunchMeals: (meals: MealData[]) => void;
  getAllDinnerLunchMeals: () => void;
  getDairyFreeDinnerLunchMeals: () => void;
  getEggFreeDinnerLunchMeals:() => void;
  getGlutenFreeDinnerLunchMeals:() => void;
  getPeanutFreeDinnerLunchMeals:() => void;
  getVegetarianDinnerLunchMeals:() => void;
}
