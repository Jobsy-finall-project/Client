import Autocomplete from "@mui/material/Autocomplete";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
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
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Textarea from "../../input/Textarea";
const CreateCompanySchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  companyId: Yup.string(),
  description: Yup.string()
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
   

    const newCompany = companys.find(curr => curr._id === currUser.company);
    const newPosition: Position = {
      _id: values._id,
      tags: values.tags,
      name: values.name,
      description: values.description,
      template: values.template
    };
    if (!newCompany) {
      CreateCompany({
        _id: v4(),
        name: values.companyName,
        description: "",
        positions: [newPosition]
      });
    } else {
      const { data } = await savePosition(newCompany._id!!, newPosition);

      newCompany.positions.push(data);
      AddPosition(newCompany);
    }

    navigate("/positions");
  };

  return (
    <Formik<FormResult>
      initialValues={{
        name: "",
        description: "",
        tags: [""],
        companyName: ""
      }}
      validationSchema={CreateCompanySchema}
      onSubmit={values => {
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
  setFieldValue
}) => {
  // const tags=["java","type script","python", "junior","expert", "backend","frontend","node.js","css","react","mongoDB","SQL"];
  const fixedOptions = [tags[0]];
  // const setFieldValue = (values: string[]) => {
  //   values.tags = [...values];
  // };
  return (
    <CreatePositionStyled>
      <Grid
        container
        className="container"
        direction="column"
        width={"100%"}
        spacing={3}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <Typography className="title" variant="h3">
            Create Position
          </Typography>
          {/* <h1 className="title">Create Position</h1> */}
        </Grid>
        <Grid item margin="0px">
          <form onSubmit={handleSubmit} className="needs-validation">
            <div className="input">
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
              <Textarea
                name="description"
                label="Description"
                placeholder=""
                value={values.description}
                onChange={handleChange}
                errors={errors.description}
                touched={touched.description}
                rows={20}
                cols={60}
                height="200px"
              />
            </div>
            <div>
              <Autocomplete
                className="complete"
                multiple
                options={tags.map(option => option)}
                style={{ marginTop: "30px" }}
                onChange={(event, value) => {
                  setFieldValue("tags", value);
                }}
                renderTags={(value: readonly string[], getTagProps) =>
                  value.map((option: string, index: number) => (
                    <Chip
                      variant="filled"
                      style={{ marginTop: "20px", fontSize: "1.2em" }}
                      color="primary"
                      label={option}
                      {...getTagProps({ index })}
                    />
                  ))
                }
                renderInput={params => (
                  <TextField
                    // name="tags"
                    // value={values.tags}
                    {...params}
                    variant="filled"
                    label="requires"
                    placeholder="choose position requires"
                    style={{maxWidth: 600}}
                    // onChange={handleChange}
                  />
                )}
              />
            </div>
            <Grid item container className="adBtn">
              <Button
                title="Save"
                color=""
                height="50px"
                width="170px"
                top="32px"
                left="100px"
                right=""
                onClick={handleSubmit}
              />
            </Grid>
          </form>
        </Grid>
      </Grid>
    </CreatePositionStyled>
  );
};

export default CreateCompany;
