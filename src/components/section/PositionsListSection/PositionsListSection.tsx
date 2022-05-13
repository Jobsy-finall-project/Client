import React from 'react'
import { useSelector } from 'react-redux';
import { State } from "../../../state";

const PositionsListSection: React.FC = () => {
    const companys = useSelector((state: State) => state.companys);
    return (
        <div>PositionsListSection</div>
    )
}
export default PositionsListSection