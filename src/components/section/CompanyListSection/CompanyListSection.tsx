import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { State } from "../../../state";
import CompanyListStyled from "./CompanyListSectionStyled";

const CompanyListSection: React.FC = () => {
  // let navigation = useNavigate();
  const companys = useSelector((state: State) => state.companys);


  return (
    <CompanyListStyled>
      <ul>
        {companys.map((currCompany) => {
          return (
            <li key={currCompany._id}>
              {currCompany.name}
              <ul>
                {currCompany.positions.map((currPosition: any) => {
                  return (
                    <li key={currPosition.positionId}>{currPosition.name}</li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </CompanyListStyled>
  );
};

export default CompanyListSection;
