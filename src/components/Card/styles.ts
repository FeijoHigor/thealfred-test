import styled from 'styled-components'

export const CardContainer = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  width: 1fr;
  gap: 1.5rem;
  position: relative;

  a {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  div.imageContainer {
    img {
      width: 100%;
      height: 100%;
      max-height: 100%;
      object-fit: cover;
      object-position: left bottom;
    }

    height: 100%;

    cursor: pointer;
    display: flex;
    border-bottom: 4px solid ${(props) => props.theme['dark-red']};
    position: relative;

    &:hover {
      div {
        transition: 0.2s;
        background-color: rgba(0, 0, 0, 0.2);
        width: 100%;
        height: 100%;
        position: absolute;
      }
    }
  }

  button {
    background: none;
    border: none;
    width: 10%;
    position: absolute;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  div.nameContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 256px;

    span {
      width: 90%;
      user-select: none;
      cursor: pointer;
      font-size: 1.6rem;
      font-weight: 600;
      white-space: nowrap;
      overflow-x: hidden;
      text-overflow: ellipsis;
    }
  }
`
