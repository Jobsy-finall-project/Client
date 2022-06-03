import React, {useEffect, useState} from "react";
import Input from "../../input/Input";
import {FieldArray, Formik, FormikProps, useFormik} from "formik";
import * as Yup from "yup";
import RecruitmentTrackModel from "../../../../models/forms/RecruitmentTrack";
import Button from "../../../common/button/Button";
import CreateRecruitmentTrackStyled from "./CreateRecruitmentTrackStyled";
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {actionsCreators, State} from "../../../../state";
import UploadImage from "../../uploadImg/UploadImage";
import {useNavigate} from "react-router-dom";
import Fab from "@mui/material/Fab";
import Grid from "@mui/material/Grid";
import CommentFieldStyled from "./CommentFieldStyled";
import Track from "../../../../models/Track"
import DeleteIcon from "@mui/icons-material/Delete";
import {saveApplication} from "../../../../services/applicationService";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from "@mui/material/FormControl";
import Company from "../../../../models/Company";
import {getCurrentUser} from "../../../../services/authService";
import {getAllCompanys, getCompanyByHrId, saveCompany} from "../../../../services/companyService";
import Position from "../../../../models/Position";
import Step from "../../../../models/Step";
import CV from "../../../../models/CV";

interface CreateRectuitmentTrackFormProps{
    formik: any
}
const CreateRecruitmentTrackSchema = Yup.object().shape({
    companyName: Yup.string().required("Required"),
    positionName: Yup.string()
        .required("Required")
        .min(4, "Password is too short - should be 4 chars minimum."),
    positionCode: Yup.string(),
    description: Yup.string().max(250, "Description is too long."),
    comments: Yup.array(Yup.string()),
});

const CreateRecruitmentTrack: React.FC = () => {
    const navigation = useNavigate();
    const dispatch = useDispatch();

    const {createTrack} = bindActionCreators(actionsCreators, dispatch);
    const {CreateCompany} = bindActionCreators(actionsCreators, dispatch);

    const tracks = useSelector((state: State) => state.tracks);
    const currentUser = getCurrentUser();

    async function getCompanys() {
        const { data } = await getAllCompanys();
        data.forEach((company: Company) => CreateCompany(company));
    }

    useEffect(() => {
        getCompanys();
    }, []);

    const formik = useFormik({
        initialValues: {
            _id: "0",
            company: {
                id: "0",
                name: "",
                description: "",
                positions: []
            },
            position: {
                _id: "0",
                tags: [],
                name: "",
                description: ""
            },
            isActive: true,
            isFavorite: false,
            steps: [],
            comments: [],
            cvFiles: [],
            isMatch: false
        },
        validationSchema: CreateRecruitmentTrackSchema,
        onSubmit: (values) => {
            doSubmit(values);
        },
    });
    const doSubmit = async (values: any) => {
        let companyId;
        if(currentUser && currentUser.role === "HR"){
            const {data} = await getCompanyByHrId();
            companyId = data._id;
        }else if(currentUser && currentUser.role === "Candidate"){
            const company: Company={
                name:values.companyName,
                description:"",
                positions:[]
            }
            console.log({company});
            const {data} = await saveCompany(company);
            companyId = data._id;
        }
        const positionToAdd: Position = {
            name: values.positionName,
            description: values.positionDescription,
            tags:[],

        }
        console.log({positionToAdd});
        const track: any = {
            position: {...positionToAdd},
            isActive: true,
            isFavorite: false,
            steps: [],
            comments: [],
            cvFiles: [],
            isMatch: false
        };

        const data = await saveApplication(track, companyId);
        createTrack(data);

        navigation("/recruitment-track-page", { state: data })
    };

    return (
        <RecruitmentTrackForm
            formik={formik}
            />
    );
};

const RecruitmentTrackForm:  React.FC<CreateRectuitmentTrackFormProps> = (props) => {
    const formik = props.formik;
    const companys = useSelector((state: State) => state.companys);
    const [newCompany, setNewCompany] = useState(false);
    const currentUser = getCurrentUser();

    return (
        <CreateRecruitmentTrackStyled>
            <form onSubmit={formik.handleSubmit} className="needs-validation">
                {currentUser && currentUser.role === "Candidate" &&
                    <Box sx={{minWidth: 500, margin: "10px auto auto 104px"}}>
                        <FormControl fullWidth>
                            <InputLabel id="company-select">Company Name</InputLabel>
                            <Select
                                labelId="company-select-label"
                                id="company-select"
                                label="Company"
                                onChange={formik.handleChange}
                                value={formik.values.companyName}
                            >
                                {(companys as Array<Company>).map((company: Company) => {
                                    return (
                                        <MenuItem value={company.name} onClick={() => {
                                            setNewCompany(false)
                                        }}>{company.name}</MenuItem>
                                    )
                                })}
                                <MenuItem value={"new"} onClick={() => {
                                    setNewCompany(true)
                                }}>add new</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>}
                {newCompany ?
                    <Input
                        name="companyName"
                        label="Company Name"
                        placeholder=""
                        value={formik.values.companyName}
                        onChange={formik.handleChange}
                        errors={formik.errors.companyName}
                        touched={formik.touched.companyName}
                        type="text"
                    /> : <></>}
                <Input
                    name="positionName"
                    label="Position Name"
                    placeholder=""
                    value={formik.values.positionName}
                    onChange={formik.handleChange}
                    errors={formik.errors.positionName}
                    touched={formik.touched.positionName}
                    type="text"
                />
                <Input
                    name="positionDescription"
                    label="Position Description"
                    placeholder=""
                    value={formik.values.positionDescription}
                    onChange={formik.handleChange}
                    errors={formik.errors.positionDescription}
                    touched={formik.touched.positionDescription}
                    type="text"
                    height="200px"
                />
                <UploadImage
                    name="upload-cv"
                    label="Upload CV"
                    type="text"
                    error=""
                    onChange={formik.handleChange}
                />
                <FieldArray
                    name="comments"
                    render={(arrayHelper) => (
                        <div>
                            {formik.values.comments.map((currComment:string, index:number) => {
                                return (
                                    <CommentFieldStyled>
                                        <Grid container spacing={2} key={index}>
                                            <Grid item xs={8}>
                                                <Input
                                                    name={`comments.${index}`}
                                                    type="text"
                                                    label=""
                                                    placeholder=""
                                                    width="100%"
                                                    marginTop="0px"
                                                    value={formik.values.comments[index]}
                                                    errors={formik.errors.comments}
                                                    touched={formik.touched.comments}
                                                    onChange={formik.handleChange}
                                                />
                                            </Grid>
                                            <Grid item xs={2}>
                                                <Fab
                                                    className="deleteBtn"
                                                    color="primary"
                                                    onClick={() => arrayHelper.remove(index)}
                                                >
                                                    <DeleteIcon/>
                                                </Fab>
                                            </Grid>
                                        </Grid>
                                    </CommentFieldStyled>
                                );
                            })}
                        </div>
                    )}
                />
                <Button
                    title="Create New Tarck"
                    color=""
                    height="50px"
                    width="170px"
                    top="32px"
                    left="100px"
                    onClick={formik.handleSubmit}
                />
            </form>
        </CreateRecruitmentTrackStyled>
    );
};

export default CreateRecruitmentTrack;
