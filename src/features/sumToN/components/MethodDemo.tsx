import { memo, useCallback } from "react";
import Editor from "@monaco-editor/react";
import { Input } from "@/components/ui/input";
import type { MethodDemoProps } from "../types";

/**
 * Reusable component to demonstrate a sum calculation method
 * Memoized to prevent unnecessary re-renders
 */
export const MethodDemo = memo(
  ({
    title,
    code,
    editorHeight,
    value,
    result,
    onValueChange,
  }: MethodDemoProps) => {
    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        onValueChange(Number(e.target.value));
      },
      [onValueChange]
    );

    return (
      <div className="space-y-2">
        <p>{title}</p>
        <div className="flex gap-4">
          <Editor
            options={{
              readOnly: true,
              minimap: { enabled: false },
              scrollBeyondLastLine: false,
            }}
            height={editorHeight}
            width="60%"
            defaultLanguage="javascript"
            defaultValue={code}
          />
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center w-[150px]">
              <span className="text-left">Input:</span>
              <Input
                type="number"
                placeholder="Enter n"
                value={value || ""}
                onChange={handleChange}
                max={999}
                min={0}
              />
            </div>
            <p className="text-left">Output: {result}</p>
          </div>
        </div>
      </div>
    );
  }
);

MethodDemo.displayName = "MethodDemo";
