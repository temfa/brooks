export const formatter = (amount: number, currency: string = 'NGN'): string => {
  const formatted = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2, // shows two decimal places
    maximumFractionDigits: 2,
    currencyDisplay: 'symbol', // displays the currency symbol
  }).format(amount);

  return formatted;
};

export const getTimeOfDay = () => {
  const currentHour = new Date().getHours();
  let time;

  if (currentHour >= 5 && currentHour < 12) {
    time = 'Good Morning';
  } else if (currentHour >= 12 && currentHour < 16) {
    time = 'Good Afternoon';
  } else {
    time = 'Good Evening';
  }

  return time;
};
