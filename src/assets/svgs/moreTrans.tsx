import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

const MoreTransSvg = (props: any) => (
  <Svg
    width={34}
    height={34}
    viewBox="0 0 34 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Circle cx={17} cy={17} r={17} fill="#CEE2FC" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.4221 11.0033L21.4902 11.0634L23.6604 13.2337C23.68 13.2533 23.6984 13.2739 23.7156 13.2956L23.7754 13.3833L23.8032 13.4363L23.8294 13.4993L23.8525 13.5763L23.8674 13.6609L23.8719 13.7214L23.871 13.788L23.8612 13.8717L23.8363 13.9711L23.8045 14.0514L23.7667 14.1219L23.7184 14.1914L23.6604 14.2568L21.4902 16.4271C21.2077 16.7096 20.7497 16.7096 20.4672 16.4271C20.2064 16.1663 20.1863 15.7559 20.407 15.4721L20.4672 15.404L21.4019 14.4687L14.468 14.4687C14.0971 14.4687 13.7913 14.1894 13.7495 13.8296L13.7446 13.7452C13.7446 13.3457 14.0685 13.0218 14.468 13.0218L21.4019 13.0219L20.4672 12.0865C20.2064 11.8257 20.1863 11.4154 20.407 11.1316L20.4672 11.0634C20.7062 10.8244 21.0709 10.7876 21.3486 10.9531L21.4221 11.0033ZM11.7861 22.2143L9.6159 20.044L9.54603 19.963L9.49436 19.8828L9.45546 19.8009L9.42986 19.7248L9.41509 19.6589L9.40527 19.5752L9.40528 19.4897L9.41507 19.4061L9.4401 19.3062L9.45421 19.2672L9.48263 19.2042L9.50969 19.1558L9.54951 19.0972L9.58743 19.0511L9.6159 19.0209L11.7861 16.8507L11.8543 16.7905C12.1144 16.5882 12.4809 16.5882 12.741 16.7905L12.8092 16.8507L12.8693 16.9188C13.0716 17.179 13.0716 17.5455 12.8693 17.8056L12.8092 17.8738L11.8744 18.8092L18.8083 18.8091C19.1793 18.8091 19.485 19.0883 19.5268 19.4481L19.5317 19.5325L19.5268 19.6169C19.4882 19.949 19.2247 20.2125 18.8926 20.251L18.8083 20.2559L11.8744 20.256L12.8092 21.1912L12.8693 21.2594C13.09 21.5432 13.0699 21.9535 12.8092 22.2143C12.5484 22.4751 12.138 22.4951 11.8543 22.2745L11.7861 22.2143Z"
      fill="#394455"
    />
  </Svg>
);
export default MoreTransSvg;
