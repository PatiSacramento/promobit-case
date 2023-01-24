import styled from "styled-components";

export const BannerContainer = styled.section` 
    width: 100%;
    height: 28rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: #2D0C5E;

    h1 {
        max-width: 48rem;
        font-weight: 700;
        font-size: 3rem;
        line-height: 117%;
        text-align: center;
        letter-spacing: -0.005rem;

        color: #FFFFFF;
    }

    p {
        font-weight: 700;
        font-size: 0.875rem;
        color: #FFFFFF;

        margin-top: 2.5rem;
        margin-bottom: 1rem;
    }

    div {
        max-width: 64.5rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
    }
`