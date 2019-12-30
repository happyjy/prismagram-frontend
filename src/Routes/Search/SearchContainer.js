import React from "react";
import { withRouter } from "react-router-dom";
import SearchPresenter from './SearchPresenter';
import { useQuery } from "react-apollo-hooks";
import { SEARCH } from "./SearchQueries";

export default withRouter(({ location: { search } }) => {
  //get urls params react
  console.log("### props in search.js: ", search);
  const term = search.split("=")[1];
  console.log({ SEARCH, useQuery })
  const { data, loading } = useQuery(SEARCH, {
    skip: term === undefined,
    variables: {
      term
    }
  });
  console.log(data);
  return <SearchPresenter search={term} loading={loading} data={data} />;
});