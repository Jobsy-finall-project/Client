import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { State } from "../../../state";
import CompanyListStyled from "./CompanyListSectionStyled";

const CompanyListSection: React.FC = () => {

    // let navigation = useNavigate();
    const companys = useSelector((state: State) => state.companys);
    console.log(companys);

    return (
        <CompanyListStyled>
            <ul>
                {
                    companys.map(currCompany => {
                        return (<li key={currCompany.id}>{currCompany.name}</li>)
                    })
                }
            </ul>
        </CompanyListStyled>
    )
}

export default CompanyListSection