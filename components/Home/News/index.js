import PropTypes from "prop-types"
import { useNews } from "../../../contexts/News"
import { Svg } from "../../Common"
import { Article } from "../"
import { Wrapper, Header, Title, TitleIcon, NewsList } from "./ui"

const News = () => {
  const {
    state: { news },
  } = useNews()

  return (
    <Wrapper>
      <Header>
        <TitleIcon>
          <Svg vector="icon-news" aria-hidden="true" viewBox="0 0 24 24" />
        </TitleIcon>
        <Title>Notícias</Title>
      </Header>

      <NewsList>
        {news.map((article) => (
          <Article key={article.id} {...article} />
        ))}
      </NewsList>
    </Wrapper>
  )
}

News.defaultProps = {
  news: [],
}

News.propTypes = {
  news: PropTypes.array,
}

export default News
