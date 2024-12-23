import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const FilterSvg = (props: any) => (
  <Svg
    width={21}
    height={14}
    viewBox="0 0 21 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M8.16667 14H12.8333V11.6667H8.16667V14ZM0 0V2.33333H21V0H0ZM3.5 8.16667H17.5V5.83333H3.5V8.16667Z"
      fill="#2B2C2E"
    />
  </Svg>
);
export default FilterSvg;
