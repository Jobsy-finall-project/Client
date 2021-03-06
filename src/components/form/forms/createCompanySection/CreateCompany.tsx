import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik, FormikProps } from "formik";
import { bindActionCreators } from "redux";
import { actionsCreators } from "../../../../state";
import * as Yup from "yup";
import Company from "../../../../models/Company";
import CreateCompanyStyled from "./CreateCompanyStyled";
import Input from "../../input/Input";
import Button from "../../../common/button/Button";
import { v4 } from "uuid";

const CreateCompanySchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  description: Yup.string(),
});

const CreateCompany: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { CreateCompany } = bindActionCreators(actionsCreators, dispatch);

  const doSubmit = (values: Company) => {
  
    const newCompany: Company = {
      ...values,
    };

  

    CreateCompany(newCompany);
    navigate("/companys");
  };

  return (
    <Formik<Company>
      initialValues={{
        _id: v4(),
        name: "",
        description: "",
        positions: [],
      }}
      validationSchema={CreateCompanySchema}
      onSubmit={(values) => {
       
        doSubmit(values);
      }}
      component={CompanyForm}
    ></Formik>
  );
};

const CompanyForm: (props: FormikProps<Company>) => JSX.Element = ({
  handleSubmit,
  handleChange,
  values,
  errors,
  touched,
}) => {
  return (
    <CreateCompanyStyled>
      <form onSubmit={handleSubmit} className="needs-validation">
        <Input
          name="name"
          label="Name"
          placeholder=""
          value={values.name}
          onChange={handleChange}
          errors={errors.name}
          touched={touched.name}
          type="text"
        />
        <Input
          name="description"
          label="Description"
          placeholder=""
          value={values.description}
          onChange={handleChange}
          errors={errors.description}
          touched={touched.description}
          type="text"
        />
        <Button
          title="Save"
          color=""
          height="50px"
          width="170px"
          top="32px"
          left="100px"
          onClick={handleSubmit}
        />
      </form>
    </CreateCompanyStyled>
  );
};

export default CreateCompany;
