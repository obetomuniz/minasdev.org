import PropTypes from "prop-types"
import { Svg } from "../../Common"
import { Wrapper, Header, Icon, Title } from "./ui"

const Section = ({ icon, title, children }) => (
  <Wrapper>
    <Header>
      <Icon>
        <Svg aria-hidden="true" {...icon} />
      </Icon>
      <Title>{title}</Title>
    </Header>
    {children}
  </Wrapper>
)

Section.propTypes = {
  icon: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Section
