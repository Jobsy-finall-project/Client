import Autocomplete from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import { Formik, FormikProps } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import { v4 } from "uuid";
import * as Yup from "yup";
import Position from "../../../../models/Position";
import { getCurrentUser } from "../../../../services/authService";
import { savePosition } from "../../../../services/positionsService";
import { actionsCreators, State } from "../../../../state";
import Button from "../../../common/button/Button";
import Input from "../../input/Input";
import CreatePositionStyled from "./CreatePositionStyled";
import tags from "../../../../assets/tag_pool.json";
const CreateCompanySchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  companyId: Yup.string(),
  description: Yup.string(),
});

interface FormResult extends Position {
  companyName: string;
}

const CreateCompany: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const companys = useSelector((state: State) => state.companys);
  const currUser = getCurrentUser();

  const { AddPosition, CreateCompany } = bindActionCreators(
    actionsCreators,
    dispatch
  );

  const doSubmit = async (values: FormResult) => {
      console.log({ currUser });

      const newCompany = companys.find(
          (curr) => curr._id === currUser.company
      );
      const newPosition: Position = {
          _id: values._id,
          tags: values.tags,
          name: values.name,
          description: values.description,
          template: values.template,
      };
      if (!newCompany) {
          console.log("creating new");

          CreateCompany({
              _id: v4(),
              name: values.companyName,
              description: "",
              positions: [newPosition],
          });
      } else {
        console.log("company:", newCompany);
        console.log("id:", newCompany._id);

        const { data } = await savePosition(newCompany._id!!, newPosition);
        console.log({ data });

        newCompany.positions.push(data);
        AddPosition(newCompany);
      }

      console.log(newCompany);

      navigate("/positions");
  };

  return (
    <Formik<FormResult>
      initialValues={{
        name: "",
        description: "",
        tags: [],
        companyName: ""
      }}
      validationSchema={CreateCompanySchema}
      onSubmit={(values) => {
        doSubmit(values);
      }}
      component={CompanyForm}
    ></Formik>
  );
};

const CompanyForm: (props: FormikProps<FormResult>) => JSX.Element = ({
  
  handleSubmit,
  handleChange,
  values,
  errors,
  touched,
}) => {

  // const tags=["java","type script","python", "junior","expert", "backend","frontend","node.js","css","react","mongoDB","SQL"];
  const fixedOptions = [tags[0]];
  return (
    <CreatePositionStyled>
      <div className="container">
      <h1>Create Position</h1>
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
        <div className="">
        <Autocomplete
     multiple
     options={tags.map((option) => option)}
    style={{ marginTop:"30px"}}
     renderTags={(value: readonly string[], getTagProps) =>
       value.map((option: string, index: number) => (
         <Chip variant="filled" style={{marginTop:"20px", fontSize:"1.2em"}} color="primary" label={option}  {...getTagProps({ index })} />
       ))
     }
     
     renderInput={(params) => (
       <TextField 
         {...params}
         variant="filled"
         label="requires"
         placeholder="choose position requires"
       />
     )}
   />
   </div>
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
      </div>
    </CreatePositionStyled>
  );
};

export default CreateCompany;
