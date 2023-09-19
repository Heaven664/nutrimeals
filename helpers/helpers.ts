import { CartProductType, CollectionItem } from "@/lib/interfaces";
export const collectionToURL = (collectionName: string): string => {
  const collectionURLName = collectionName
    .toLocaleLowerCase()
    .replace(/ /g, "-");

  return `/collections/${collectionURLName}`;
};

export const titleToSlug = (title: string) => {
  return title.toLocaleLowerCase().replace(/ /g, "-");
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
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const updateCart = (cart: CartProductType[]) => {
  console.log('cart', cart);
  localStorage.setItem("cart", JSON.stringify(cart));
};
