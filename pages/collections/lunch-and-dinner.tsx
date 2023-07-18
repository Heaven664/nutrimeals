import CollectionFilter from "@/components/collections/CollectionFilter";
import CollectionTitle from "@/components/collections/CollectionTitle";

const LunchAndDinnerCollection = () => {
  return (
    <>
      <CollectionTitle title="Lunch and Dinner" />
      <CollectionFilter productsNumber={20} />
    </>
  );
};

export default LunchAndDinnerCollection;
