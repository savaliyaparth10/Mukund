import "./App.css";
import { BathroomLanding } from "./component/BathroomLandingSection";
import { ContactPage } from "./component/contactPage";
import { HomePage } from "./component/home";
import { ProfessionalCollections } from "./component/professionalCollectionsSection";
import SmoothScroll from "smooth-scroll";
import { ServicesSection } from "./component/servicesSection";
import { AboutUs } from "./component/aboutUsSection";
import { GallerySection } from "./component/gallerySection";
import { SiteVisitForm } from "./component/siteVisitForm";
import { WhatsAppChatButton } from "./component/WhatsAppChatButton";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

function AppIndex() {
  return (
    <div className="App ">
      <HomePage />
      {
        // <SiteVisitForm />
      }{" "}
      <ServicesSection />
      {/* <ProfessionalCollections /> */}
      <GallerySection />
      <AboutUs />
      <BathroomLanding />
      <WhatsAppChatButton />
      <div className="fixed bottom-5 z-[50] right-5 ">
        <button
          data-modal-target="select-modal"
          data-modal-toggle="select-modal"
          className="block text-white bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-800 dark:focus:ring-blue-800"
          type="button"
          onClick={() => (window.location.href = "/BookFreeSiteVisit")}
        >
          Book Free Site Visit
        </button>
      </div>
    </div>
  );
}

export default AppIndex;
