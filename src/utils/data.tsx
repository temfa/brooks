/* eslint-disable react/react-in-jsx-scope */
import AirtimeSvg from '../assets/svgs/airtimeSvg';
import BillSvg from '../assets/svgs/billSvg';
import LoanSvg from '../assets/svgs/loan';
import TransSvg from '../assets/svgs/transSvg';

export const onboardingData = [
  {
    id: 1,
    title: 'Own a Bank account in 5minutes',
    text: 'Managing your money is what we do and we are really good at it.',
    image: require('../assets/first.png'),
    width: 208,
    height: 229,
  },
  {
    id: 2,
    title: 'Get a Debit card to make payments',
    text: 'Managing your money is what we do and we are really good at it.',
    image: require('../assets/second.png'),
    width: 235,
    height: 256,
  },
  {
    id: 3,
    title: 'Pay your bills in few minutes',
    text: 'Managing your money is what we do and we are really good at it.',
    image: require('../assets/third.png'),
    width: 226,
    height: 220,
  },
  {
    id: 4,
    title: 'Set your PIN to secure your account',
    text: 'Managing your money is what we do and we are really good at it.',
    image: require('../assets/fourth.png'),
    width: 226,
    height: 243,
  },
];

export const registerHeaderText = [
  {
    title: 'Open your Account',
    text: 'Enter a few details to get started',
  },
  {
    title: 'Verify Account',
    text: 'We just sent you a 6-digit code. Check your message and enter code to proceed',
  },
  {
    title: 'Additional Information',
    text: 'One more step to go and you’re all set',
  },
  {
    title: 'Create your Password',
    text: 'Enter your Password',
  },
];

export const quick = [
  {
    icon: <TransSvg />,
    title: 'Transfers',
    link: 'Transfer',
  },
  {
    icon: <LoanSvg />,
    title: 'Get Loan',
    link: 'Loan',
  },
  {
    icon: <AirtimeSvg />,
    title: 'Buy Airtime',
    link: 'Airtime',
  },
  {
    icon: <BillSvg color="#394455" />,
    title: 'Pay Bills',
    link: 'Bills',
  },
];

export const notifcationData = [
  {
    id: 1,
    type: 'Credit',
    name: 'Transfer from Rosemary Utsu  ',
    amount: '₦45,000',
    account: '****2345.',
    transId: '00019GRWC ',
    date: 'Thurs, 16 Mar. 2023 5:30pm ',
  },
  {
    id: 2,
    type: 'Debit',
    name: 'Reschedule Payment for DSTV ',
    amount: '₦45,000',
    account: '****2345.',
    transId: '00019GRWC ',
    date: 'Thurs, 16 Mar. 2023 5:30pm ',
  },
  {
    id: 3,
    type: 'Credit',
    name: 'Transfer from Rosemary Utsu  ',
    amount: '₦45,000',
    account: '****2345.',
    transId: '00019GRWC ',
    date: 'Thurs, 16 Mar. 2023 5:30pm ',
  },
  {
    id: 4,
    type: 'Credit',
    name: 'Transfer from Rosemary Utsu  ',
    amount: '₦45,000',
    account: '****2345.',
    transId: '00019GRWC ',
    date: 'Thurs, 16 Mar. 2023 5:30pm ',
  },
  {
    id: 5,
    type: 'Credit',
    name: 'Transfer from Rosemary Utsu  ',
    amount: '₦45,000',
    account: '****2345.',
    transId: '00019GRWC ',
    date: 'Thurs, 16 Mar. 2023 5:30pm ',
  },
  {
    id: 6,
    type: 'Debit',
    name: 'Reschedule Payment for DSTV',
    amount: '₦45,000',
    account: '****2345.',
    transId: '00019GRWC ',
    date: 'Thurs, 16 Mar. 2023 5:30pm ',
  },
];
