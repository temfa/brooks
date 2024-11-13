import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const CaretRightSvg = (props: any) => (
  <Svg
    width={7}
    height={13}
    viewBox="0 0 7 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M1 1.5L6 6.5L1 11.5"
      stroke="#196FE3"
      strokeWidth={1.9}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default CaretRightSvg;
