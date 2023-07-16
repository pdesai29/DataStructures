const fib = (num) => {
  if (num === 0) {
    return 0;
  }
  if (num === 1) {
    return 1;
  }
  return fib(num - 1) + fib(num - 2);
};

// Top-Down memoization approach
const fibDynamicMemo = (num) => {
  const memo = [];

  const fibDynamicMemoHelper = (num) => {
    if (memo[num]) {
      return memo[num];
    }
    if (num === 0) {
      memo[num] = 0;
      return memo[num];
    }
    if (num === 1) {
      memo[num] = 1;
      return memo[num];
    }

    const fib = fibDynamicMemoHelper(num - 1) + fibDynamicMemoHelper(num - 2);
    memo[num] = fib;
    return memo[num];
  };
  fibDynamicMemoHelper(num);
  return memo[num];
};

// Bottom-Up Tabulation approach
const fibDynamicTabulation = (num) => {
  if (n <= 2) return 1;
  const fibNums = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
};
