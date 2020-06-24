import PropTypes from "prop-types"
import { useNews } from "../../../contexts/News"
import { Svg } from "../../Common"
import { Section, Article } from "../"
import { NewsList } from "./ui"

const News = () => {
  const {
    state: { news },
  } = useNews()

  return (
    <Section
      title="Notícias"
      icon={{ vector: "icon-news", viewBox: "0 0 24 24" }}
    >
      <NewsList>
        {news.map((article) => (
          <Article key={article.id} {...article} />
        ))}
      </NewsList>
    </Section>
  )
}

News.defaultProps = {
  news: [],
}

News.propTypes = {
  news: PropTypes.array,
}

export default News
