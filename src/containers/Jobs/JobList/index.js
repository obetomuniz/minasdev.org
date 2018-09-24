import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getMinasDevJobs } from "@reducers/MinasDev/actions";
import { selectMinasDevJobs } from "@reducers/MinasDev/selectors";
import { Job } from "@components/Jobs";
import { Wrapper, Content } from "./UI";

@connect(state => ({ minasDevJobs: selectMinasDevJobs(state) }))
export default class JobList extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    minasDevJobs: PropTypes.object
  };

  componentWillMount() {
    this.props.dispatch(getMinasDevJobs());
  }

  render() {
    return (
      <Wrapper>
        <Content>
          {this.props.minasDevJobs.map((minasDevJob, key) => (
            <Job key={`job-${key}`} data={minasDevJob} />
          ))}
        </Content>
      </Wrapper>
    );
  }
}
