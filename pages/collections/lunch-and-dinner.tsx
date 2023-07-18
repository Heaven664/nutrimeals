import CollectionFilter from "@/components/collections/CollectionFilter";
import CollectionTitle from "@/components/collections/CollectionTitle";
import CollectionsList from "@/components/collections/CollectionsList";
import { getDummyCollections } from "@/dummy-collections";

const LunchAndDinnerCollection = () => {
  const collections = getDummyCollections();

  return (
    <>
      <CollectionTitle title="Lunch and Dinner" />
      <CollectionFilter productsNumber={20} />
      <CollectionsList collections={collections} />
    </>
  );
};

export default LunchAndDinnerCollection;
