import { useMemo, useState } from "react";
import Editor from "@monaco-editor/react";
import { Input } from "@/components/ui/input";
import type { MethodDemoProps } from "../types";

/**
 * Reusable component to demonstrate a sum calculation method
 */
const MethodDemo = ({ title, code, editorHeight, sumToN }: MethodDemoProps) => {
  const [n, setN] = useState(0);

  const result = useMemo(() => sumToN(n), [n, sumToN]);

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
              value={n || ""}
              onChange={(e) => setN(Number(e.target.value))}
              max={999}
              min={0}
            />
          </div>
          <p className="text-left">Output: {result}</p>
        </div>
      </div>
    </div>
  );
};

export default MethodDemo;
