import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
const SettingsIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)" opacity={0.3}>
      <Path
        fill="#787880"
        d="M25.52 17.253c.053-.4.08-.813.08-1.253 0-.427-.027-.853-.093-1.253l2.706-2.107a.654.654 0 0 0 .16-.813L25.813 7.4c-.16-.293-.493-.387-.786-.293l-3.187 1.28a9.419 9.419 0 0 0-2.16-1.254l-.48-3.386a.645.645 0 0 0-.64-.547h-5.12a.632.632 0 0 0-.627.547l-.48 3.386a9.63 9.63 0 0 0-2.16 1.254l-3.186-1.28A.637.637 0 0 0 6.2 7.4l-2.547 4.427c-.16.28-.106.626.16.813l2.707 2.107c-.067.4-.12.84-.12 1.253 0 .413.027.853.093 1.253L3.787 19.36a.654.654 0 0 0-.16.813l2.56 4.427c.16.293.493.387.786.293l3.187-1.28a9.418 9.418 0 0 0 2.16 1.254l.48 3.386c.067.32.32.547.64.547h5.12c.32 0 .587-.227.627-.547l.48-3.386a9.147 9.147 0 0 0 2.16-1.254l3.186 1.28c.294.107.627 0 .787-.293l2.56-4.427c.16-.293.093-.626-.16-.813l-2.68-2.107ZM16 20.8c-2.64 0-4.8-2.16-4.8-4.8 0-2.64 2.16-4.8 4.8-4.8 2.64 0 4.8 2.16 4.8 4.8 0 2.64-2.16 4.8-4.8 4.8Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h32v32H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SettingsIcon;