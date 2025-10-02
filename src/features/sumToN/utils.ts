/**
 * Method A: Mathematical formula - O(1)
 * Uses the formula: sum = n(n+1)/2
 */
export function sumToN_a(n: number): number {
  // Handle edge cases: negative numbers and zero
  if (n <= 0) return 0;

  return (n * (n + 1)) / 2;
}

/**
 * Method B: Recursion - O(n)
 * Recursively adds n + sum(n-1)
 */
export function sumToN_b(n: number): number {
  // Handle edge cases: negative numbers and zero
  if (n <= 0) return 0;

  if (n === 1) return 1;

  // For large numbers, use formula to avoid stack overflow
  if (n > 10000) {
    return (n * (n + 1)) / 2;
  }

  return n + sumToN_b(n - 1);
}

/**
 * Method C: Loop iteration - O(n)
 * Iterates from 1 to n and accumulates sum
 */
export function sumToN_c(n: number): number {
  // Handle edge cases: negative numbers and zero
  if (n <= 0) return 0;

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
