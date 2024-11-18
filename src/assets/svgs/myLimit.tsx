import * as React from 'react';
import Svg, {Circle, G, Path, Defs, ClipPath, Rect} from 'react-native-svg';
const MyLimitSvg = (props: any) => (
  <Svg
    width={27}
    height={27}
    viewBox="0 0 27 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Circle cx={13.5} cy={13.5} r={13.5} fill="#CEE2FC" />
    <G clipPath="url(#clip0_293_700)">
      <Path
        d="M13.484 18.9163C16.4757 18.9163 18.9007 16.4913 18.9007 13.4997C18.9007 10.508 16.4757 8.08301 13.484 8.08301C10.4924 8.08301 8.06738 10.508 8.06738 13.4997C8.06738 16.4913 10.4924 18.9163 13.484 18.9163Z"
        stroke="black"
        strokeWidth={0.886364}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.8123 15.7915H14.1882C15.3365 15.7915 15.7915 15.3311 15.7915 14.1882V12.8123C15.7915 11.664 15.3311 11.209 14.1882 11.209H12.8123C11.664 11.209 11.209 11.6694 11.209 12.8123V14.1882C11.209 15.3311 11.6694 15.7915 12.8123 15.7915Z"
        stroke="black"
        strokeWidth={0.886364}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_293_700">
        <Rect width={13} height={13} fill="white" transform="translate(7 7)" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default MyLimitSvg;
