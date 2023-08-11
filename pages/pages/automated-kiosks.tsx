import KioskFaq from "@/components/kiosks/KioskFaq";
import KioskPerks from "@/components/kiosks/KioskPerks";
import KioskInfo from "@/components/kiosks/KiosksIntro";
import VisitKiosk from "@/components/kiosks/VisitKiosk";

const AutomatedKiosks = () => {
  return (
    <>
      <KioskInfo />
      <KioskPerks />
      <VisitKiosk />
      <KioskFaq />
    </>
  );
};

export default AutomatedKiosks;
