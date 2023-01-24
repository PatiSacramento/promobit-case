import styled from "styled-components"


export const CardContainer = styled.div` 
    width: 12rem;
    height: 100%;
    padding: 0.5rem;

    display: flex;
    flex-direction: column;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    justify-content: start;

    img {
        width: 11rem;
        height: 13rem;
        border-radius: 4px;
        object-fit: cover;
    }

    h6 {
        font-weight: 700;
        font-size: 1.125rem;
        //line-height: 167%;
        color: #131313;
    }

    p {
        color: #131313;
    }
`