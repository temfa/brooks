import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
const Credit = (props: any) => (
  <Svg
    width={33}
    height={33}
    viewBox="0 0 33 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Circle
      cx={16.7016}
      cy={16.607}
      r={16.2016}
      transform="rotate(-180 16.7016 16.607)"
      fill="#00BA88"
      fillOpacity={0.15}
    />
    <Path
      d="M19.9799 13.3299L13.4221 19.8877"
      stroke="#00BA88"
      strokeWidth={1.85161}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M19.9799 19.8877L13.4221 19.8877L13.4221 13.3299"
      stroke="#00BA88"
      strokeWidth={1.85161}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default Credit;
