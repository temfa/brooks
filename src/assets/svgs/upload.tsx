import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const UploadSvg = (props: any) => (
  <Svg
    width={18}
    height={19}
    viewBox="0 0 18 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M16.5 8V11.75C16.5 15.5 15 17 11.25 17H6.75C3 17 1.5 15.5 1.5 11.75V7.25C1.5 3.5 3 2 6.75 2H10.5"
      stroke="#3E84F2"
      strokeWidth={1.125}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M5.25 10.25H9.75M5.25 13.25H8.25M16.5 8H13.5C11.25 8 10.5 7.25 10.5 5V2L16.5 8Z"
      stroke="#3E84F2"
      strokeWidth={1.125}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default UploadSvg;
