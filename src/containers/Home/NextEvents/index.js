import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getMinasDevEvents } from "@reducers/MinasDev/actions";
import { selectMinasDevEvents } from "@reducers/MinasDev/selectors";
import { Event } from "@components/Home";
import {
  Wrapper,
  Header,
  Title,
  TitleIcon,
  ContributionCTA,
  ContributionCTALink,
  EventList
} from "./UI";

@connect(state => ({ minasDevEvents: selectMinasDevEvents(state) }))
export default class NextEvents extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    minasDevEvents: PropTypes.object
  };

  componentDidMount() {
    this.props.dispatch(getMinasDevEvents());
  }

  render() {
    return (
      <Wrapper>
        <Header>
          <TitleIcon>
            <svg aria-hidden="">
              <use xlinkHref="/images/vectors/icons.svg#calendar" />
            </svg>
          </TitleIcon>
          <Title>Próximos Eventos</Title>
          <TitleIcon hide>
            <svg aria-hidden="">
              <use xlinkHref="/images/vectors/icons.svg#calendar" />
            </svg>
          </TitleIcon>
        </Header>
        <ContributionCTA>
          Não encontrou seu evento favorito abaixo?
          <ContributionCTALink
            href="https://github.com/minasdev/eventos/issues/new"
            target="_blank"
            rel="noopener"
          >
            Adicione-o neste link
          </ContributionCTALink>
        </ContributionCTA>
        <EventList>
          {this.props.minasDevEvents.map((minasDevEvent, key) => (
            <Event key={`event-${key}`} data={minasDevEvent} />
          ))}
        </EventList>
        <ContributionCTA>
          Não encontrou seu evento favorito acima?
          <ContributionCTALink
            href="https://github.com/minasdev/eventos/issues/new"
            target="_blank"
            rel="noopener"
          >
            Adicione-o neste link
          </ContributionCTALink>
        </ContributionCTA>
      </Wrapper>
    );
  }
}
