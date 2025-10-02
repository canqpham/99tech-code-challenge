/**
 * Props for MethodDemo component
 */
export interface MethodDemoProps {
  methodNumber: number;
  title: string;
  code: string;
  editorHeight: string;
  value: number;
  result: number;
  onValueChange: (value: number) => void;
}
