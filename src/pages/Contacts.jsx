import React from "react";
import PageTopSection from "../components/general-components/PageTopSection";
import ContactUs from "../components/contacts-components/ContactUs";
import Offices from "../components/contacts-components/Offices";

const Contacts = () => {
  return (
    <main>
      <PageTopSection
        background="./images/contacts/background.svg"
        heading="CONTACTS"
        paragraph="Contact us for all your construction needs. We always welcome any questions and comments."
        path={[{ name: "Homepage", ref: "/" }, { name: "Contacts" }]}
      />
      <ContactUs />
      <Offices />
    </main>
  );
};

export default Contacts;
