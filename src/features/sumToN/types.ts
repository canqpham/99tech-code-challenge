/**
 * Props for MethodDemo component
 */
export interface MethodDemoProps {
  methodNumber: number;
  title: string;
  code: string;
  editorHeight: string;
  sumToN: (n: number) => number;
}
