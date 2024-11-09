import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const CalenderSvg = (props: any) => (
  <Svg
    width={11}
    height={11}
    viewBox="0 0 11 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M3.66667 0.916504V2.2915M7.33333 0.916504V2.2915M1.60417 4.16609H9.39583M9.625 3.89567V7.7915C9.625 9.1665 8.9375 10.0832 7.33333 10.0832H3.66667C2.0625 10.0832 1.375 9.1665 1.375 7.7915V3.89567C1.375 2.52067 2.0625 1.604 3.66667 1.604H7.33333C8.9375 1.604 9.625 2.52067 9.625 3.89567Z"
      stroke="#0C0D0D"
      strokeWidth={0.6}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M7.19352 6.2793H7.19764M7.19352 7.6543H7.19764M5.49768 6.2793H5.50227M5.49768 7.6543H5.50227M3.80139 6.2793H3.80598M3.80139 7.6543H3.80598"
      stroke="#0C0D0D"
      strokeWidth={0.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default CalenderSvg;
