import KioskFaq from "@/components/kiosks/KioskFaq";
import KioskPerks from "@/components/kiosks/KioskPerks";
import KioskVideo from "@/components/kiosks/KioskVideo";
import KioskInfo from "@/components/kiosks/KiosksIntro";
import VisitKiosk from "@/components/kiosks/VisitKiosk";

const AutomatedKiosks = () => {
  return (
    <>
      <KioskInfo />
      <KioskPerks />
      <VisitKiosk />
      <KioskVideo />
      <KioskFaq />
    </>
  );
};

export default AutomatedKiosks;
