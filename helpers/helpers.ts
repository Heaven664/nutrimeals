import { CartProductType, CollectionItem, ProductData } from "@/lib/interfaces";
export const collectionToURL = (collectionName: string): string => {
  const collectionURLName = collectionName
    .toLocaleLowerCase()
    .replace(/ /g, "-")
    .replace(/,/g, "");

  return `/collections/${collectionURLName}`;
};

export const titleToSlug = (title: string) => {
  return title.toLocaleLowerCase().replace(/ /g, "-").replace(/,/g, "");
};

export const getCart = () => {
  let cart: CartProductType[];
  let cartFromStorage = localStorage.getItem("cart");
  if (cartFromStorage) {
    cart = JSON.parse(cartFromStorage);
  } else {
    cart = [];
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  return cart;
};

export const addItemToCartFromCollection = (
  item: CollectionItem,
  quantity: number
) => {
  let cart: CartProductType[] = getCart();
  let itemInTheCart = false;
  const updatedCart = cart.map((product) => {
    if (product.title === item.title) {
      itemInTheCart = true;
      return { ...product, quantity: product.quantity + quantity };
    } else {
      return product;
    }
  });
  if (itemInTheCart) {
    cart = updatedCart;
  } else {
    let beverageContainer = item.isBeverage;
    if (!beverageContainer) {
      beverageContainer = false;
    }
    let product: CartProductType = {
      title: item.title,
      slug: titleToSlug(item.title),
      image: item.image,
      price: item.price,
      quantity: quantity,
      beverageContainer: beverageContainer,
    };
    cart.push(product);
  }
  updateCart(cart);
  return cart;
};

export const addItemToCartFromProductPage = (
  item: ProductData,
  quantity: number
) => {
  let cart: CartProductType[] = getCart();
  let itemInTheCart = false;
  const updatedCart = cart.map((product) => {
    if (product.title === item.mealData.title) {
      itemInTheCart = true;
      return { ...product, quantity: product.quantity + quantity };
    } else {
      return product;
    }
  });
  if (itemInTheCart) {
    cart = updatedCart;
  } else {
    let beverageContainer = item.mealData.beverageImageContainer;
    let product: CartProductType = {
      title: item.mealData.title,
      slug: titleToSlug(item.mealData.title),
      image: item.mealData.imagePath,
      price: item.mealData.price,
      quantity: quantity,
      beverageContainer: beverageContainer,
    };
    cart.push(product);
  }
  updateCart(cart);
  return cart;
};

export const updateCart = (cart: CartProductType[]) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};
