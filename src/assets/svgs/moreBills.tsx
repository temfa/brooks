import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

const MoreBills = (props: any) => (
  <Svg
    width={34}
    height={34}
    viewBox="0 0 34 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Circle cx={17} cy={17} r={17} fill="#CEE2FC" />
    <Path
      d="M13.1113 15.7334H20.1645"
      stroke="#394455"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M13.1113 17.9043H20.1645"
      stroke="#394455"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10.127 22.7866V12.4781C10.127 12.3342 10.1841 12.1962 10.2859 12.0945C10.3876 11.9927 10.5256 11.9355 10.6695 11.9355H22.6057C22.7496 11.9355 22.8876 11.9927 22.9893 12.0945C23.0911 12.1962 23.1482 12.3342 23.1482 12.4781V22.7866L20.978 21.7015L18.8078 22.7866L16.6376 21.7015L14.4674 22.7866L12.2972 21.7015L10.127 22.7866Z"
      stroke="#394455"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default MoreBills;
