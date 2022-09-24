import React, { Fragment, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Artifacts = props => {
  return (
    <Fragment>
      <h1>Artifacts</h1>
    </Fragment>
  )
};

// const mapStateToProps = state => {
//   return {
//     // artifacts: state.artifactsReducer.artifacts
//     ...state.artifactsReducer
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     getAllArtifacts: () => dispatch(getAllArtifacts())
//   }
// }

export default Artifacts;