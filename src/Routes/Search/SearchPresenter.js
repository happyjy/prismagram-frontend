import React from "react";
import styled from "styled-components";
import PropsTypes from "prop-types";
import FatText from "../../Components/FatText";

const Wrapper = styled.div`
  height: 50vh;
  text-align: center;
`;

const SearchPresenter = ({ searchTerm, loading }) => (
  <Wrapper>
    {searchTerm === undefined && <FatText text={"search For something"} />}
  </Wrapper>
)

SearchPresenter.propTypes = {
  searchTerm: PropsTypes.string,
  loading: PropsTypes.bool
}

export default SearchPresenter;