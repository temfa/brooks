import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
const MoreAirtime = (props: any) => (
  <Svg
    width={34}
    height={34}
    viewBox="0 0 34 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Circle cx={17} cy={17} r={17} fill="#CEE2FC" />
    <Path
      d="M17.0006 21.7016H17.0078H17.0006ZM14.107 23.8719H19.8942C20.2779 23.8719 20.6459 23.7194 20.9172 23.4481C21.1886 23.1768 21.341 22.8088 21.341 22.4251V12.2974C21.341 11.9137 21.1886 11.5457 20.9172 11.2743C20.6459 11.003 20.2779 10.8506 19.8942 10.8506H14.107C13.7232 10.8506 13.3552 11.003 13.0839 11.2743C12.8126 11.5457 12.6602 11.9137 12.6602 12.2974V22.4251C12.6602 22.8088 12.8126 23.1768 13.0839 23.4481C13.3552 23.7194 13.7232 23.8719 14.107 23.8719Z"
      stroke="#394455"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default MoreAirtime;
