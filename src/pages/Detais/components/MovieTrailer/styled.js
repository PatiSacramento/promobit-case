import styled from "styled-components";

export const TrailerContainer = styled.div` 
    display: flex;
    flex-direction: column;
    margin-top: 8.125rem;
    margin-left: 7rem;
    overflow-x: scroll;
    margin-right: 6rem;
    width: fit-content;

    h2 {
        font-weight: 700;
        font-size: 1.75rem;
        line-height: 114%;
        margin-bottom: 1.5rem;
    }

    video {
        width: 56rem;
        height: 32rem;
    }
`