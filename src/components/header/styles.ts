import styled from "styled-components";

export const HeaderContainer = styled.header`
    padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1.5rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        padding-bottom: 2.5rem;
    }

    h2 {
        padding-bottom: 1rem;
        font-weight: 700;
        font-size: 2rem;
        text-align: center;
    }

    p {
        color: ${props => props.theme['medium-gray']};
        text-align: center;
    }

`