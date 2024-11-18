/* eslint-disable react/react-in-jsx-scope */
import {ReactNode} from 'react';
import AirtimeSvg from '../assets/svgs/airtimeSvg';
import LoanSvg from '../assets/svgs/loan';
import MoreAirtime from '../assets/svgs/moreAirtime';
import MoreBills from '../assets/svgs/moreBills';
import MoreContact from '../assets/svgs/morecontact';
import MoreKyc from '../assets/svgs/moreKyc';
import MoreLoan from '../assets/svgs/moreLoan';
import MoreSettings from '../assets/svgs/moreSettings';
import MoreTransSvg from '../assets/svgs/moreTrans';
import TransSvg from '../assets/svgs/transSvg';
import {RootStackParamList} from './type';
import MyPinSvg from '../assets/svgs/myPin';
import MyPasswordSvg from '../assets/svgs/myPassword';
import MyCardSvg from '../assets/svgs/myCard';
import MyLimitSvg from '../assets/svgs/myLimit';
import QuickBillSvg from '../assets/svgs/quickBill';

export const onboardingData = [
  {
    id: 1,
    title: 'Own a Bank account in 5minutes',
    text: 'Managing your money is what we do and we are really good at it.',
    image: require('../assets/first.png'),
    width: 265,
    height: 227,
  },
  {
    id: 2,
    title: 'Get a Debit card to make payments',
    text: 'Managing your money is what we do and we are really good at it.',
    image: require('../assets/second.png'),
    width: 253,
    height: 243,
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

type QuickProps = {
  icon: ReactNode;
  title: string;
  link: keyof RootStackParamList;
};

export const quick: QuickProps[] = [
  {
    icon: <TransSvg />,
    title: 'Transfers',
    link: 'Transfer',
  },
  {
    icon: <LoanSvg />,
    title: 'Get Loan',
    link: 'Loans',
  },
  {
    icon: <AirtimeSvg />,
    title: 'Buy Airtime',
    link: 'Airtime',
  },
  {
    icon: <QuickBillSvg />,
    title: 'Pay Bills',
    link: 'Pay Bills',
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

type transaction = {
  id: number;
  type: 'Debit' | 'Credit';
  name: string;
  amount: number;
  date: string;
  status: 'Successful' | 'Failed' | 'Pending';
  beneficiary: string;
  network?: string;
};

export const transactionHistory: transaction[] = [
  {
    id: 1,
    name: 'Transfer',
    status: 'Successful',
    type: 'Debit',
    amount: 106170.5,
    date: 'Nov 20, 2020 1:54 AM',
    beneficiary: 'Benedict Ose',
  },
  {
    id: 2,
    name: 'Transfer',
    status: 'Successful',
    type: 'Credit',
    amount: 106170.5,
    date: 'Nov 20, 2020 1:54 AM',
    beneficiary: 'Soji Oju',
  },
  {
    id: 3,
    name: 'Transfer',
    status: 'Successful',
    type: 'Debit',
    amount: 106170.5,
    date: 'Nov 20, 2020 1:54 AM',
    beneficiary: 'Sunday Efe',
  },
  {
    id: 4,
    name: 'Transfer',
    status: 'Successful',
    type: 'Debit',
    amount: 106170.5,
    date: 'Nov 20, 2020 1:54 AM',
    beneficiary: 'Benedict Ose',
  },
  {
    id: 5,
    name: 'Transfer',
    status: 'Successful',
    type: 'Credit',
    amount: 106170.5,
    date: 'Nov 20, 2020 1:54 AM',
    beneficiary: 'Soji Oju',
  },
  {
    id: 6,
    name: 'Transfer',
    status: 'Successful',
    type: 'Debit',
    amount: 106170.5,
    date: 'Nov 20, 2020 1:54 AM',
    beneficiary: 'Sunday Efe',
  },
  {
    id: 7,
    name: 'Transfer',
    status: 'Successful',
    type: 'Debit',
    amount: 106170.5,
    date: 'Nov 20, 2020 1:54 AM',
    beneficiary: 'Benedict Ose',
  },
  {
    id: 8,
    name: 'Transfer',
    status: 'Successful',
    type: 'Credit',
    amount: 106170.5,
    date: 'Nov 20, 2020 1:54 AM',
    beneficiary: 'Soji Oju',
  },
];
export const billsTransactionHistory: transaction[] = [
  {
    id: 1,
    name: 'DSTV Subscription',
    status: 'Successful',
    type: 'Debit',
    amount: 10000,
    date: 'Nov 20, 2020 1:54 AM',
    beneficiary: '5488188919027',
    network: 'Cable',
  },
  {
    id: 2,
    name: 'Ikeja Electric Payment',
    status: 'Successful',
    type: 'Debit',
    amount: 106170.5,
    date: 'Nov 20, 2020 1:54 AM',
    beneficiary: '5488188919027',
    network: 'Electricity',
  },
  {
    id: 3,
    name: 'DSTV Subscription',
    status: 'Successful',
    type: 'Debit',
    amount: 10000,
    date: 'Nov 20, 2020 1:54 AM',
    beneficiary: '5488188919027',
    network: 'Cable',
  },
  {
    id: 4,
    name: 'GOTV Subscription',
    status: 'Successful',
    type: 'Debit',
    amount: 6170.5,
    date: 'Nov 20, 2020 1:54 AM',
    beneficiary: '5488188919027',
    network: 'Cable',
  },
  {
    id: 5,
    name: 'Ikeja Electric Payment',
    status: 'Successful',
    type: 'Debit',
    amount: 106170.5,
    date: 'Nov 20, 2020 1:54 AM',
    beneficiary: '5488188919027',
    network: 'Electricity',
  },
];

export const airtimeTransactionHistory: transaction[] = [
  {
    id: 1,
    name: 'Airtime Purchase',
    status: 'Successful',
    type: 'Debit',
    amount: 500,
    date: 'Nov 20, 2020 1:54 AM',
    beneficiary: '08188919027',
    network: 'MTN',
  },
  {
    id: 2,
    name: 'Airtime Purchase',
    status: 'Pending',
    type: 'Debit',
    amount: 2000,
    date: 'Nov 20, 2020 1:54 AM',
    beneficiary: '08188919027',
    network: 'Glo',
  },
  {
    id: 3,
    name: 'Data Bundle',
    status: 'Successful',
    type: 'Debit',
    amount: 1000,
    date: 'Nov 20, 2020 1:54 AM',
    beneficiary: '08188919027',
    network: 'MTN',
  },
  {
    id: 4,
    name: 'Airtime Purchase',
    status: 'Successful',
    type: 'Debit',
    amount: 1000,
    date: 'Nov 20, 2020 1:54 AM',
    beneficiary: '08188919027',
    network: 'MTN',
  },
  {
    id: 5,
    name: 'Data Bundle',
    status: 'Failed',
    type: 'Debit',
    amount: 1000,
    date: 'Nov 20, 2020 1:54 AM',
    beneficiary: '08188919027',
    network: 'MTN',
  },
];

export const electrictyDistribution = [
  {
    id: 1,
    title: 'Eko Electricity Distribution Prepaid',
  },
  {
    id: 2,
    title: 'Eko Electricity Distribution Postpaid',
  },
  {
    id: 3,
    title: 'Ikeja Electricity Distribution Prepaid',
  },
  {
    id: 4,
    title: 'Ibadan Electricity Distribution Prepaid',
  },
  {
    id: 5,
    title: 'Jos Electricity Distribution Prepaid',
  },
];

export const cable = [
  {
    id: 1,
    title: 'DSTV',
  },
  {
    id: 2,
    title: 'GOTV',
  },
  {
    id: 3,
    title: 'Startimes',
  },
];

export const packages = [
  {
    id: 1,
    title: 'DSTV Padi',
    text: 'Amount: NGN22,100',
  },
  {
    id: 2,
    title: 'DSTV Confam',
    text: 'Amount: NGN5,200',
  },
  {
    id: 3,
    title: 'DSTV Compact',
    text: 'Amount: NGN22,100',
  },
  {
    id: 4,
    title: 'DSTV Compact',
    text: 'Amount: NGN22,100',
  },
  {
    id: 5,
    title: 'DSTV Compact',
    text: 'Amount: NGN22,100',
  },
  {
    id: 6,
    title: 'DSTV Compact',
    text: 'Amount: NGN22,100',
  },
  {
    id: 7,
    title: 'DSTV Compact',
    text: 'Amount: NGN22,100',
  },
];

type moreDataProps = {
  id: number;
  title: string;
  icon: ReactNode;
  link: keyof RootStackParamList;
};

export const moreData: moreDataProps[] = [
  {
    id: 1,
    title: 'Transfer',
    icon: <MoreTransSvg />,
    link: 'Transfer',
  },
  {
    id: 2,
    title: 'Buy Airtime',
    icon: <MoreAirtime />,
    link: 'Airtime',
  },
  {
    id: 3,
    title: 'Pay Bills',
    icon: <MoreBills />,
    link: 'Pay Bills',
  },
  {
    id: 4,
    title: 'Loan',
    icon: <MoreLoan />,
    link: 'Loans',
  },
  {
    id: 5,
    title: 'Update KYC',
    icon: <MoreKyc />,
    link: 'Kyc',
  },
  {
    id: 6,
    title: 'My Account Setting',
    icon: <MoreSettings />,
    link: 'MyAccount',
  },
  {
    id: 7,
    title: 'Contact Us',
    icon: <MoreContact />,
    link: 'Contact',
  },
];

export const myAccountData: moreDataProps[] = [
  {
    id: 1,
    title: 'PIN Settings',
    icon: <MyPinSvg />,
    link: 'PinSettings',
  },
  {
    id: 2,
    title: 'Password Settings',
    icon: <MyPasswordSvg />,
    link: 'ChangePassword',
  },
  {
    id: 3,
    title: 'Transfer Limit',
    icon: <MyLimitSvg />,
    link: 'ChangeLimit',
  },
  {
    id: 4,
    title: 'Card Settings',
    icon: <MyCardSvg />,
    link: 'Card',
  },
  {
    id: 5,
    title: 'Manage Beneficiaries',
    icon: <MyCardSvg />,
    link: 'Beneficiaries',
  },
];

export const transBeneData = [
  {
    id: 1,
    name: 'Benedict Owobu',
    account: 5334204567,
    bank: 'Zenith Bank',
  },
  {
    id: 2,
    name: 'Jude Ekpe',
    account: 5334204567,
    bank: 'Access Bank',
  },
  {
    id: 3,
    name: 'Queen Ikpo',
    account: 5334204567,
    bank: 'Stanbic IBTC Bank',
  },
  {
    id: 4,
    name: 'Tega Oko',
    account: 5334204567,
    bank: 'Wema Bank',
  },
  {
    id: 5,
    name: 'Tega Oko',
    account: 5334204567,
    bank: 'Wema Bank',
  },
];
export const payBeneData = [
  {
    id: 1,
    name: 'Paul Jeremiah',
    network: 'MTN',
    number: '08188919027',
  },
  {
    id: 2,
    name: 'Justine Efe',
    network: 'MTN',
    number: '08188919027',
  },
  {
    id: 3,
    name: 'Paul Jeremiah',
    network: 'MTN',
    number: '08188919027',
  },
  {
    id: 4,
    name: 'Paul Jeremiah',
    network: 'MTN',
    number: '08188919027',
  },
  {
    id: 5,
    name: 'Paul Jeremiah',
    network: 'MTN',
    number: '08188919027',
  },
  {
    id: 6,
    name: 'Paul Jeremiah',
    network: 'MTN',
    number: '08188919027',
  },
];
