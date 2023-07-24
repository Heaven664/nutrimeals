export interface MealData {
  _id: string;
  id: string;
  title: string;
  price: number;
  image: string;
  dairyFree: boolean;
  eggFree: boolean;
  glutenFree: boolean;
  peanutFree: boolean;
  vegetarian: boolean;
  date: string;
}

export interface MealsContextType {
  allDinnerLunchMeals: MealData[];
  activeDinnerLunchMeals: MealData[];
  changeActiveDinnerLunchMeals: (meals: MealData[]) => void;
  changeAllDinnerLunchMeals: (meals: MealData[]) => void;
  getAllDinnerLunchMeals: () => void;
  getDairyFreeDinnerLunchMeals: () => void;
  getEggFreeDinnerLunchMeals: () => void;
  getGlutenFreeDinnerLunchMeals: () => void;
  getPeanutFreeDinnerLunchMeals: () => void;
  getVegetarianDinnerLunchMeals: () => void;
  sortDinnerLunchAlphabetically: () => void;
  sortDinnerLunchAlphabeticallyReversed: () => void;
  sortDinnerLunchByPriceAsc: () => void;
  sortDinnerLunchByPriceDesc: () => void;
  sortDinnerLunchByDateAsc: () => void;
  sortDinnerLunchByDateDesc: () => void;
}
