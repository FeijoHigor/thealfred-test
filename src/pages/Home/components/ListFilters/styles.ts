import styled from 'styled-components'

export const ListFiltersContainer = styled.div`
  padding: 0;
`

export const ListFiltersContent = styled.div`
  width: 100%;
  max-width: 1120px;

  padding: 1rem 0;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;

  flex-wrap: wrap;

  span {
    font-size: 1.1rem;
    font-weight: 500;

    display: flex;
    align-items: center;

    color: ${(props) => props.theme['light-gray']};
  }

  div.filters {
    display: flex;
    gap: 0 2.5rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (max-width: 750px) {
    justify-content: center;
  }
`

export const Filter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  gap: 0.7rem;

  span {
    color: ${(props) => props.theme['dark-red']};
  }
`

export const ToggleButton = styled.label`
  background-color: #e6e6e6;
  cursor: pointer;

  width: 3.5rem;
  height: 1.8rem;
  border-radius: 1rem;

  display: flex;
  align-items: center;
  position: relative;

  input {
    display: none;
  }

  span {
    opacity: 1;
    margin: 0 0.3rem;
    left: 0;
    position: absolute;
    width: 1.2rem;
    height: 1.2rem;
    background-color: ${(props) => props.theme['dark-red']};
    border-radius: 1rem;
    box-shadow: 1px 1px 3px 0px rgba(255, 21, 16, 0.8);
    transition: 0.3s;
  }

  input:checked + span {
    left: 50%;
    box-shadow: -1px 1px 3px 0px rgba(255, 21, 16, 0.8);
  }
`
