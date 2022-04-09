import React from "react";
import SectionContent from "../components/section/sectionContent/SectionContent";
import TitleSection from "../components/section/titleSection/TitleSection";
import CreateItemForm from "../components/form/forms/createItemForm/CreateItemForm";

const CreateItem = () => {
  const longText: string =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum gravida scelerisque nunc senectus ac. Aliquam auctor lacinia pellentesque purus viverra dignissim. Vel quam varius.";

  return (
    <div>
      <TitleSection title="Add new card" />
      <SectionContent content={longText} />
      <CreateItemForm />
    </div>
  );
};

export default CreateItem;
