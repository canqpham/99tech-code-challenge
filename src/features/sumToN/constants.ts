/**
 * Code snippets for display in the editor
 */

export const CODE_SNIPPETS = {
  METHOD_A: `/**
 * S = 1 + 2 + 3 + ... + (n-1) + n
 * S = n + (n-1) + (n-2) + ... + 2 + 1
 * 2S = (n+1) + (n+1) + ... + (n+1) + (n+1)
 * 2S = n(n+1)
 * S = n(n+1)/2
 */
function sumToN_a(n: number): number {
  // Handle edge cases: negative numbers and zero
  if (n <= 0) return 0;
  
  return (n * (n + 1)) / 2;
}`,

  METHOD_B: `function sumToN_b(n: number): number {
  // Handle edge cases: negative numbers and zero
  if (n <= 0) return 0;
  
  if (n === 1) return 1;
  
  return n + sumToN_b(n - 1);
}`,

  METHOD_C: `function sumToN_c(n: number): number {
  // Handle edge cases: negative numbers and zero
  if (n <= 0) return 0;
  
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}`,
};

export const METHOD_TITLES = {
  METHOD_A: "1: Use math formula with time complexity O(1)",
  METHOD_B: "2: Use recursion with time complexity O(n)",
  METHOD_C: "3: Use loop with time complexity O(n)",
};

export const EDITOR_HEIGHTS = {
  METHOD_A: "250px",
  METHOD_B: "180px",
  METHOD_C: "250px",
};
