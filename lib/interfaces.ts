export interface MealData {
  _id: string;
  id: string;
  title: string;
  price: number;
  image: string;
  dairyFree?: boolean;
  eggFree?: boolean;
  glutenFree?: boolean;
  peanutFree?: boolean;
  vegetarian?: boolean;
  beverage?: boolean;
  beverages?: boolean;
  giftCard?: boolean;
  date: string;
}

export interface MealsContextType {
  allDinnerLunchMeals: MealData[];
  activeDinnerLunchMeals: MealData[];
  changeActiveDinnerLunchMeals: (meals: MealData[]) => void;
  changeAllDinnerLunchMeals: (meals: MealData[]) => void;
  getAllDinnerLunchMeals: (meals: MealData[]) => void;
  getDairyFreeDinnerLunchMeals: (meals: MealData[]) => void;
  getEggFreeDinnerLunchMeals: (meals: MealData[]) => void;
  getGlutenFreeDinnerLunchMeals: (meals: MealData[]) => void;
  getPeanutFreeDinnerLunchMeals: (meals: MealData[]) => void;
  getVegetarianDinnerLunchMeals: (meals: MealData[]) => void;
  getBeverage: (meals: MealData[]) => void;
  getBeverages: (meals: MealData[]) => void;
  getGiftCards: (meals: MealData[]) => void;
  sortDinnerLunchAlphabetically: (meals: MealData[]) => void;
  sortDinnerLunchAlphabeticallyReversed: (meals: MealData[]) => void;
  sortDinnerLunchByPriceAsc: (meals: MealData[]) => void;
  sortDinnerLunchByPriceDesc: (meals: MealData[]) => void;
  sortDinnerLunchByDateAsc: (meals: MealData[]) => void;
  sortDinnerLunchByDateDesc: (meals: MealData[]) => void;
}
