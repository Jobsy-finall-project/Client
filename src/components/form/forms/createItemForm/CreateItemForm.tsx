import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionsCreators, State } from "../../../../state";
import { useNavigate } from "react-router-dom";
import { Formik, FormikProps } from "formik";
import * as Yup from "yup";
import CardModel from "../../../../models/Card";
import Input from "../../input/Input";
import Button from "../../../common/button/Button";
import UploadImage from "../../uploadImg/UploadImage";
import CreateItemFormStyled from "./CreateItemFormStyled";

const CreateItemSchema = Yup.object().shape({
  title: Yup.string()
    .max(25, "Title is too long - should not be more than 225 chars.")
    .required("Required"),
  content: Yup.string()
    .required("No content provided.")
    .max(225, "Content is too long - should not be more than 225 chars."),
});

const CreateItemForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { createCard } = bindActionCreators(actionsCreators, dispatch);

  const cards = useSelector((state: State) => state.cards);

  const handleCreateNewCard = (values: CardModel) => {


    const card: CardModel = {
      id: values.id,
      title: values.title,
      content: values.content,
    };

    createCard(card);
    console.log(cards);
    navigate("/functional-page");
  };
  return (
    <Formik<CardModel>
      initialValues={{
        id: cards.length,
        title: "",
        content: "",
      }}
      validationSchema={CreateItemSchema}
      onSubmit={(values) => {
        console.log(values);
        handleCreateNewCard(values);
      }}
      component={ItemCreationForm}
    ></Formik>
  );
};

const ItemCreationForm: (props: FormikProps<CardModel>) => JSX.Element = ({
  handleSubmit,
  handleChange,
  values,
  errors,
  touched,
}) => {
  return (
    <CreateItemFormStyled>
      <form onSubmit={handleSubmit} className="needs-validation">
        <Input
          name="title"
          label="Card name"
          type="text"
          placeholder="card name"
          value={values.title}
          onChange={handleChange}
          errors={errors.title}
          touched={touched.title}
        />
        <Input
          name="content"
          label="Card content"
          type="text"
          placeholder="content"
          value={values.content}
          onChange={handleChange}
          errors={errors.content}
          touched={touched.content}
        />
        <UploadImage
          name="upload-img"
          label="Upload card image"
          type="text"
          error=""
          onChange={handleChange}
        />
        <div className="create-new-item-btn">
          <Button
            title="Create new card"
            size="md"
            style="primary"
            onClick={handleSubmit}
          />
        </div>
      </form>
    </CreateItemFormStyled>
  );
};
export default CreateItemForm;
