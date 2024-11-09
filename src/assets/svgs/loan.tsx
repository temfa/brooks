import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const LoanSvg = (props: any) => (
  <Svg
    width={26}
    height={26}
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M4.21876 19.0702L4.31716 18.9833L10.8897 12.4115L14.329 15.8499C14.7055 16.2265 15.2979 16.2554 15.7077 15.9368L15.806 15.8499L20.2897 11.3671L21.6401 12.7166C22.2694 13.346 23.3261 12.947 23.4168 12.0968L23.4231 11.9781L23.4212 7.73828L23.4119 7.64682L23.3858 7.52265L23.3605 7.44345L23.3252 7.35827L23.2706 7.25645L23.2007 7.15586L23.1171 7.06173C23.0802 7.0248 23.0411 6.99119 23.0004 6.96092L22.8842 6.88607L22.7665 6.83025L22.6564 6.7933L22.5337 6.76737L22.4718 6.76L22.3786 6.75586H18.2008C17.3108 6.75586 16.8458 7.78517 17.3828 8.4505L17.4623 8.53884L18.8118 9.88919L15.0675 13.6335L11.6283 10.1951C11.2518 9.8186 10.6593 9.78964 10.2496 10.1082L10.1512 10.1951L2.84009 17.5062C2.43221 17.9141 2.43221 18.5754 2.84009 18.9833C3.2166 19.3598 3.80904 19.3888 4.21876 19.0702Z"
      fill="#394455"
    />
  </Svg>
);
export default LoanSvg;
