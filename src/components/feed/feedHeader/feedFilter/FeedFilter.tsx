import React, { useCallback } from "react";
import { useState } from "react";
import FeedFilterStyled from "./FeedFilterStyled";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionsCreators, State } from "../../../../state";
import SortAttributeModel from "../../../../models/SortAttribute";

const FeedFilter: React.FC = () => {
  const [sortAttributes, setSortAttributes] = useState([
    "Filter",
    "Date",
    "Type",
    "Price",
    "Color",
  ]);

  const dispatch = useDispatch();

  const { sortAttribute } = bindActionCreators(actionsCreators, dispatch);

  const selectedSortAttribute: SortAttributeModel = useSelector(
    (state: State) => state.sortAttribute
  );

  const cards = useSelector((state: State) => state.cards);

  const handleSort = useCallback(
    (attribute: string) => {
      const CopySelectedSortAttribute: SortAttributeModel = {
        ...selectedSortAttribute,
      };
      if (CopySelectedSortAttribute.attribute === attribute)
        CopySelectedSortAttribute.order =
          CopySelectedSortAttribute.order === "asc" ? "desc" : "asc";
      else {
        CopySelectedSortAttribute.attribute = attribute;
        CopySelectedSortAttribute.order = "asc";
      }
      sortAttribute(CopySelectedSortAttribute);
    },
    [selectedSortAttribute, sortAttribute]
  );

  return (
    <FeedFilterStyled>
      <p>Sorted By</p>
      <div className="filters-container">
        {sortAttributes.map((attribute) => (
          <div
            key={attribute}
            className="filter-container btn btn-light"
            onClick={() => handleSort(attribute)}
          >
            {selectedSortAttribute.attribute === attribute && (
              <div className="selected-filter-point"></div>
            )}
            <p>{attribute}</p>
          </div>
        ))}
      </div>
    </FeedFilterStyled>
  );
};

export default FeedFilter;
