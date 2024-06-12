const generateBudgetOptions = () => {
  let budgetOptions = [];
  const lakhs = 100000;
  let currentValue = 5 * lakhs;
  const crore = 10000000;

  for (; currentValue <= 5 * crore; ) {
    budgetOptions.push(currentValue);

    if (currentValue < 50 * lakhs) {
      currentValue += 500000;
    } else if (currentValue < 95 * lakhs) {
      currentValue += 1500000;
    } else if (currentValue < 30000000) {
      currentValue += 2500000;
    } else if (currentValue < 50000000) {
      currentValue += 5000000;
    }
  }

  return budgetOptions;
};
export const BUDGET_OPTIONS = generateBudgetOptions();
