import React from "react";
import { fetchedData } from "../interfaces";

interface PaginateButtonsProps  {
    handlePrev: () => void;
    handleNext: () => void;
    pageNumberFromApi: number;
    totalPagesFromApi: number;
    pageData: fetchedData[];
}
const PaginateButtons: React.FC<PaginateButtonsProps> = props => {

    const isNotFirstPage = (props.pageNumberFromApi !== 1);
    const isNotLastPage = (props.totalPagesFromApi !== props.pageNumberFromApi);

    return (
         <>
             {isNotFirstPage && <button onClick={props.handlePrev}>Prev</button>}
             {isNotLastPage && <button onClick={props.handleNext}>Next</button>}
         </>
     )
}

export default PaginateButtons;