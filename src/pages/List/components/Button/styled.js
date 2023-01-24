import styled from "styled-components";

export const ButtonContainer = styled.span`
    height: 2.5rem;

    display: flex;
    align-items: center;

    border-style: none;
    border-radius: 6px;
    padding: 0.5rem 1rem;

    color: ${(props) => props.selected ? '#FFFFFF' : '#323232'};
    background-color: ${(props) => props.selected ? '#D18000' : '#FFFFFF'};

    &:hover {
        cursor: pointer;
    }

    span {
        display: ${(props) => props.selected ? 'inherit' : 'none'};
        margin-left: 0.625rem;
        background-color: ${(props) => props.selected ? '#D18000' : '#FFFFFF'};
        color: ${(props) => props.selected ? '#FFFFFF' : '#D18000'};
    }
`

export const GenreButton = styled.button` 
    height: 100%;

    border-style: none;

    font-size: 1rem;
    font-weight: 700;
    
    text-align: center;
    
    color: ${(props) => props.selected ? '#FFFFFF' : '#323232'};
    background-color: ${(props) => props.selected ? '#D18000' : '#FFFFFF'};
    
    &:hover {
        cursor: pointer;
    }
`