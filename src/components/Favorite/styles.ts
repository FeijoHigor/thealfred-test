import styled from "styled-components";

export const FavoriteContainer = styled.div`

    display: flex;
    align-items: center;

    svg {
        color: ${props => props.theme['dark-red']};
    }
`