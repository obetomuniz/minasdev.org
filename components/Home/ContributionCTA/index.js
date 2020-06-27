import PropTypes from "prop-types"
import { Wrapper, Link } from "./ui"

const ContributionCTA = ({ text, link, textLink }) => (
  <Wrapper>
    {text}
    {link && <Link {...link}>{textLink}</Link>}
  </Wrapper>
)

ContributionCTA.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.object,
  textLink: PropTypes.string,
}

export default ContributionCTA
