import styled from "styled-components";
import Pagination from 'react-bootstrap/Pagination';

export const PaginationContainer = styled(Pagination)` 
    width: 22.5rem;
    height: 2.3rem;
    margin: 4.5rem auto;

    
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: center;


    a {
        color: #5C16C5;
        text-decoration: none;
    }

    span, div {
        color: #5C16C5;
        width: 2.65rem;
        height: 2.5rem;

        font-weight: 700;
        font-size: 1rem;
        text-align: center;
        line-height: 150%;

        border: none;
        background-color: #FFFFFF;
        
    }
 
    
`