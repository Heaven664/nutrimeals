import LocationInfo from "./locationInfo";
import MenuInfo from "./menuInfo";
import SubscriptionInfo from "./subsriptionInfo";
import WasteInfo from "./wasteInfo";

const Info = () => {
  return (
    <>
      <MenuInfo />
      <SubscriptionInfo />
      <WasteInfo />
      <LocationInfo />
    </>
  );
};

export default Info;
