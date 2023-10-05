import * as React from "react";
import Svg, { Path } from "react-native-svg";
const PowerBtnIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <Path
      fill="#787880"
      fillRule="evenodd"
      d="M17.53 3h-3.06v13.394h3.06V3ZM4.761 8.874c1.529-2.71 3.933-4.782 6.792-5.854l1.111 3.146a9.827 9.827 0 0 0-5.094 4.39 10.304 10.304 0 0 0-1.183 6.734 10.122 10.122 0 0 0 3.277 5.952 9.584 9.584 0 0 0 6.216 2.409 9.571 9.571 0 0 0 6.271-2.252 10.104 10.104 0 0 0 3.417-5.868c.438-2.307.076-4.7-1.023-6.76a9.848 9.848 0 0 0-4.988-4.518l1.185-3.117c2.833 1.143 5.187 3.275 6.652 6.023a13.749 13.749 0 0 1 1.364 9.014c-.583 3.077-2.195 5.846-4.556 7.824a12.762 12.762 0 0 1-8.362 3.002 12.78 12.78 0 0 1-8.288-3.212c-2.313-2.037-3.859-4.845-4.369-7.936a13.74 13.74 0 0 1 1.578-8.977Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default PowerBtnIcon;