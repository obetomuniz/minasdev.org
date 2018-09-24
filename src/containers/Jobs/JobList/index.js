import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import _ from "lodash";
import { getMinasDevJobs, filterMinasDevJobs } from "@reducers/MinasDev/actions";
import { selectMinasDevJobs, selectMinasDevJobsFiltered } from "@reducers/MinasDev/selectors";
import { Job } from "@components/Jobs";
import { Wrapper, Content, Title, Search } from "./UI";

@connect(state => ({
  minasDevJobs: selectMinasDevJobs(state),
  minasDevJobsFiltered: selectMinasDevJobsFiltered(state)
}))
export default class JobList extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    minasDevJobs: PropTypes.object
  };

  constructor(props) {
    super(props);

    this.filterMinasDevJobs = _.debounce(this.filterMinasDevJobs, 300);
  }

  componentWillMount() {
    if (typeof document === "undefined" || process.env.NODE_ENV === "development") {
      this.props.dispatch(getMinasDevJobs());
    }
  }

  filterMinasDevJobs(field, value) {
    this.props.dispatch(filterMinasDevJobs(this.props.minasDevJobs, { field, value }));
  }

  renderFilters = () => {
    return (
      <Search
        type="search"
        placeholder="Digite React, Python, QA, Manager, etc."
        onChange={event => this.filterMinasDevJobs("query", event.target.value)}
      />
    );
  };

  render() {
    return (
      <Wrapper>
        <Title>VAGAS</Title>
        {this.renderFilters()}
        <Content>
          {this.props.minasDevJobsFiltered.map((minasDevJob, key) => (
            <Job key={`job-${key}`} data={minasDevJob} />
          ))}
        </Content>
      </Wrapper>
    );
  }
}
