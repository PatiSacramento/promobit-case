import styled from "styled-components"

export const MovieCardContainer = styled.div` 
    width: 11rem;
    height: 20rem;

    display: flex;
    flex-direction: column;

    &:hover {
        cursor: pointer;
    }


    img {
        margin-bottom: 0.5rem;
        box-sizing: border-box;

        border: 1px solid #E7E7E7;
        border-radius: 4px;
    }

    h5 {
        font-weight: 700;
        font-size: 1rem;
        line-height: 150%;
        color: #000000;
    }

    p {
        font-weight: 700;
        font-size: 0.875rem;
        line-height: 171%;

        color: #646464;
    }
`