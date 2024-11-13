import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const DownloadSvg = (props: any) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M9 11V17M9 17L11 15M9 17L7 15"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M22 10H18C15 10 14 9 14 6V2L22 10Z"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default DownloadSvg;
