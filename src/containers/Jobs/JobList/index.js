import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import _ from "lodash";
import { getMinasDevJobs, filterMinasDevJobs } from "@reducers/MinasDev/actions";
import { selectMinasDevJobs, selectMinasDevJobsFiltered } from "@reducers/MinasDev/selectors";
import { Job } from "@components/Jobs";
import { Wrapper, Content, Title, Search, Filters, ButtonFilter, ResultsNotFound } from "./UI";

const notFoundImages = [
  "https://i.giphy.com/media/YyKPbc5OOTSQE/giphy.webp",
  "https://i.giphy.com/media/VwoJkTfZAUBSU/giphy.webp",
  "https://i.giphy.com/media/14uQ3cOFteDaU/giphy.webp",
  "https://media.giphy.com/media/BEYRc8P1IaiaY/giphy.gif",
  "https://media.giphy.com/media/yZgHsSVnzIjew/giphy.gif",
  "https://i.giphy.com/media/9J7tdYltWyXIY/giphy.webp",
  "https://i.giphy.com/media/l1J9EdzfOSgfyueLm/giphy.webp",
  "https://i.giphy.com/media/3o7bu5AoSsr2bfe4fK/giphy.webp"
];

@connect(state => ({
  minasDevJobs: selectMinasDevJobs(state),
  minasDevJobsFiltered: selectMinasDevJobsFiltered(state)
}))
export default class JobList extends Component {
  state = {
    searchTerm: "",
    tags: []
  };

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    minasDevJobs: PropTypes.object
  };

  constructor(props) {
    super(props);

    this.filterMinasDevJobsBySearchTerm = _.debounce(this.filterMinasDevJobsBySearchTerm, 300);
  }

  componentWillMount() {
    if (typeof document === "undefined" || process.env.NODE_ENV === "development") {
      this.props.dispatch(getMinasDevJobs());
    }
  }

  filterMinasDevJobsBySearchTerm(searchTerm) {
    this.setState(
      {
        searchTerm
      },
      () => {
        this.props.dispatch(
          filterMinasDevJobs(this.props.minasDevJobs, {
            filters: {
              searchTerm: this.state.searchTerm,
              tags: this.state.tags
            }
          })
        );
      }
    );
  }

  filterMinasDevJobsByTag = tag => {
    const { tags } = this.state;
    const removeElementByValue = (elements, value) => {
      for (var i = 0; i < elements.length; i++)
        if (elements[i] === value) {
          elements.splice(i, 1);
          break;
        }
      return elements;
    };
    const newTags = tags.includes(tag) ? removeElementByValue(tags, tag) : [...tags, tag];

    this.setState(
      {
        tags: newTags
      },
      () => {
        this.props.dispatch(
          filterMinasDevJobs(this.props.minasDevJobs, {
            filters: {
              searchTerm: this.state.searchTerm,
              tags: this.state.tags
            }
          })
        );
      }
    );
  };

  renderFilters = () => {
    return (
      <div>
        <Search
          type="search"
          placeholder="Digite React, Python, QA, Manager, etc."
          onChange={event => this.filterMinasDevJobsBySearchTerm(event.target.value)}
        />
        <Filters>
          <ButtonFilter
            active={this.state.tags.includes("programming")}
            onClick={event => this.filterMinasDevJobsByTag("programming")}
          >
            Programação
          </ButtonFilter>
          <ButtonFilter
            active={this.state.tags.includes("frontend")}
            onClick={event => this.filterMinasDevJobsByTag("frontend")}
          >
            Front-End
          </ButtonFilter>
          <ButtonFilter
            active={this.state.tags.includes("backend")}
            onClick={event => this.filterMinasDevJobsByTag("backend")}
          >
            Back-End
          </ButtonFilter>
          <ButtonFilter
            active={this.state.tags.includes("mobile")}
            onClick={event => this.filterMinasDevJobsByTag("mobile")}
          >
            Mobile
          </ButtonFilter>
          <ButtonFilter
            active={this.state.tags.includes("devops")}
            onClick={event => this.filterMinasDevJobsByTag("devops")}
          >
            DevOps
          </ButtonFilter>
          <ButtonFilter
            active={this.state.tags.includes("blockchain")}
            onClick={event => this.filterMinasDevJobsByTag("blockchain")}
          >
            Blockchain
          </ButtonFilter>
          <ButtonFilter
            active={this.state.tags.includes("design")}
            onClick={event => this.filterMinasDevJobsByTag("design")}
          >
            Design
          </ButtonFilter>
          <ButtonFilter
            active={this.state.tags.includes("content")}
            onClick={event => this.filterMinasDevJobsByTag("content")}
          >
            Conteúdo
          </ButtonFilter>
          <ButtonFilter
            active={this.state.tags.includes("social")}
            onClick={event => this.filterMinasDevJobsByTag("social")}
          >
            Social Media
          </ButtonFilter>
          <ButtonFilter
            active={this.state.tags.includes("support")}
            onClick={event => this.filterMinasDevJobsByTag("support")}
          >
            Suporte
          </ButtonFilter>
          <ButtonFilter
            active={this.state.tags.includes("manager")}
            onClick={event => this.filterMinasDevJobsByTag("manager")}
          >
            Manager
          </ButtonFilter>
          <ButtonFilter
            active={this.state.tags.includes("sales")}
            onClick={event => this.filterMinasDevJobsByTag("sales")}
          >
            Sales
          </ButtonFilter>
        </Filters>
      </div>
    );
  };

  render() {
    return (
      <Wrapper>
        <Title>{this.props.minasDevJobsFiltered.size} VAGAS </Title>
        {this.renderFilters()}
        <Content>
          {this.props.minasDevJobsFiltered.map((minasDevJob, key) => (
            <Job key={`job-${key}`} data={minasDevJob} />
          ))}
          {this.props.minasDevJobsFiltered.size === 0 && (
            <ResultsNotFound
              src={notFoundImages[Math.floor(Math.random() * notFoundImages.length)]}
              alt="Nenhum resultado encontrado."
            />
          )}
        </Content>
      </Wrapper>
    );
  }
}
