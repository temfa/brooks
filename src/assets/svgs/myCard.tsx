import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
const MyCardSvg = (props: any) => (
  <Svg
    width={27}
    height={27}
    viewBox="0 0 27 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Circle cx={13.5} cy={13.5} r={13.5} fill="#CEE2FC" />
    <Path
      d="M8.04688 16.2708L14.2708 10.0469M11.7818 17.5208L12.4068 16.8958M13.1839 16.1193L14.4286 14.8745"
      stroke="black"
      strokeWidth={0.78125}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M7.04213 19.4569H17.4588M7.87599 13.3324L11.3343 9.87404C12.4385 8.76988 12.9906 8.76467 14.0843 9.85842L16.6416 12.4157C17.7354 13.5095 17.7302 14.0615 16.626 15.1657L13.1677 18.624C12.0635 19.7282 11.5114 19.7334 10.4177 18.6397L7.86036 16.0824C6.76661 14.9886 6.76661 14.4418 7.87599 13.3324Z"
      stroke="black"
      strokeWidth={0.78125}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default MyCardSvg;
