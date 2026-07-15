import ContactHero from "../components/contactpage-sections/contact-hero";
import ContactSection from "../components/contactpage-sections/contact-section";


const contactPage = (): React.ReactElement => {
  return (
   <div>
    <ContactHero></ContactHero>
    <ContactSection></ContactSection>
   </div>
  );
};

export default contactPage;