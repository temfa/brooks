import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const KinSvg = (props: any) => (
  <Svg
    width={23}
    height={23}
    viewBox="0 0 23 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M13.8387 18.2556L15.2954 19.7123L18.2087 16.7989M11.4908 20.9006C9.74665 20.9006 8.01207 20.4598 6.68957 19.5781C4.3704 18.0256 4.3704 15.4956 6.68957 13.9527C9.32499 12.1893 13.6471 12.1893 16.2825 13.9527M11.6537 10.4164C11.5579 10.4068 11.4429 10.4068 11.3375 10.4164C10.2375 10.3791 9.19527 9.91507 8.43147 9.12264C7.66766 8.33022 7.24228 7.27162 7.2454 6.17102C7.24389 5.61262 7.3526 5.05942 7.5653 4.54312C7.77799 4.02683 8.0905 3.55758 8.4849 3.16229C8.8793 2.767 9.34784 2.45344 9.86365 2.23958C10.3795 2.02572 10.9324 1.91576 11.4908 1.91602C13.8387 1.91602 15.7458 3.8231 15.7458 6.17102C15.7458 8.47102 13.925 10.3398 11.6537 10.4164Z"
      stroke="#3E84F2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default KinSvg;