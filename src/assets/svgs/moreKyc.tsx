import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
const MoreKyc = (props: any) => (
  <Svg
    width={34}
    height={34}
    viewBox="0 0 34 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Circle cx={17} cy={17} r={17} fill="#CEE2FC" />
    <Path
      d="M21.6 14.7496V20.5996C21.6 22.3996 20.526 22.9996 19.2 22.9996H14.4C13.074 22.9996 12 22.3996 12 20.5996V14.7496C12 12.7996 13.074 12.3496 14.4 12.3496C14.4 12.7216 14.55 13.0576 14.796 13.3036C15.042 13.5496 15.378 13.6996 15.75 13.6996H17.85C18.594 13.6996 19.2 13.0936 19.2 12.3496C20.526 12.3496 21.6 12.7996 21.6 14.7496Z"
      stroke="black"
      strokeWidth={0.9}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14.4004 17.6H16.8004M14.4004 20H19.2004M19.2004 12.35C19.2004 13.094 18.5944 13.7 17.8504 13.7H15.7504C15.3784 13.7 15.0424 13.55 14.7964 13.304C14.5504 13.058 14.4004 12.722 14.4004 12.35C14.4004 11.606 15.0064 11 15.7504 11H17.8504C18.2224 11 18.5584 11.15 18.8044 11.396C19.0504 11.642 19.2004 11.978 19.2004 12.35Z"
      stroke="black"
      strokeWidth={0.9}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default MoreKyc;
