import styled from "styled-components";

export const BannerContainer = styled.section` 
    width: 100%;
    height: 37.5rem;

    display: flex;
    gap: 2rem;
    padding-top: 4.5rem;

    background-color: #2D0C5E;

    img {
        width: 23rem;
        height: 35rem;
        border-radius: 8px;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        border: none;

        margin-left: 7rem;
    }

   
`

export const InfosContainer = styled.div` 
    color: #FFFFFF;
    
    h2 {
        font-weight: 700;
        font-size: 2rem;
        line-height: 119%;

        letter-spacing: -0.005rem;
    }

`

export const MovieInformation = styled.div` 
    display: flex;
    gap: 0.5rem;

    span {
        font-size: 1.125rem;
        line-height: 133%;
    }
`

export const EvaluationContainer = styled.div` 
    display: flex;
    gap: 0.75rem;
    align-items: center;
    margin-bottom: 2rem;
    margin-top: 1rem;
`

export const SinopseContainer = styled.div` 
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;

    p {
        max-width: 43.5rem;
        height: min-content;
        line-height: 150%;
        color: #DDDDDD;
        margin-top: 0.5rem;
        margin-right: 13rem;
        word-break: break-word;
    }
`

export const ActorsContainer = styled.div` 
    display: grid;
    grid-template-columns: repeat(3, 11rem);
    row-gap: 1.5rem;
    
    span{
        h6 {
            font-weight: 700;
            line-height: 150%;
            font-size: 1rem;
        }

        p {
            font-size: 0.875rem;
        }
    }

`