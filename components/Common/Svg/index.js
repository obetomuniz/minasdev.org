import React from "react"

export default ({ vector, ...rest }) => (
  <svg
    {...rest}
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    dangerouslySetInnerHTML={{
      __html: require(`../../../public/images/vectors/${vector}.svg?include`),
    }}
  />
)
