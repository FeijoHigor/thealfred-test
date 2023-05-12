import styled from "styled-components";

export const CardContainer = styled.li`
    
    list-style: none;
    display: flex;
    flex-direction: column;
    width: 1fr;
    gap: 1.5rem;

    div.imageContainer {
        img {
            width: 100%;
            height: 100%;
        }

        cursor: pointer;
        display: flex;
        border-bottom: 4px solid ${props => props.theme['dark-red']};
    }

    div.nameContainer {
        display: flex;
        justify-content: space-between;
        align-items: center;

        span {
            user-select: none;
            cursor: pointer;
            font-size: 1.6rem;
            font-weight: 600;
        }
    }

`