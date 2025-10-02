import { useState, useMemo, useCallback } from "react";
import { sumToN_a, sumToN_b, sumToN_c } from "./utils";
import { CODE_SNIPPETS, METHOD_TITLES, EDITOR_HEIGHTS } from "./constants";
import { MethodDemo } from "./components";

/**
 * Three ways to sum from 1 to n
 */
const SumToN = () => {
  const [nA, setNA] = useState(0);
  const [nB, setNB] = useState(0);
  const [nC, setNC] = useState(0);

  // Memoize calculations to avoid recalculating on every render
  const resultA = useMemo(() => sumToN_a(nA), [nA]);
  const resultB = useMemo(() => sumToN_b(nB), [nB]);
  const resultC = useMemo(() => sumToN_c(nC), [nC]);

  // Stable callback references
  const handleChangeA = useCallback((value: number) => setNA(value), []);
  const handleChangeB = useCallback((value: number) => setNB(value), []);
  const handleChangeC = useCallback((value: number) => setNC(value), []);

  return (
    <div className="flex flex-col gap-4">
      {/* Method A: Mathematics Formula */}
      <MethodDemo
        methodNumber={1}
        title={METHOD_TITLES.METHOD_A}
        code={CODE_SNIPPETS.METHOD_A}
        editorHeight={EDITOR_HEIGHTS.METHOD_A}
        value={nA}
        result={resultA}
        onValueChange={handleChangeA}
      />

      {/* Method B: Recursion */}
      <MethodDemo
        methodNumber={2}
        title={METHOD_TITLES.METHOD_B}
        code={CODE_SNIPPETS.METHOD_B}
        editorHeight={EDITOR_HEIGHTS.METHOD_B}
        value={nB}
        result={resultB}
        onValueChange={handleChangeB}
      />

      {/* Method C: Loop */}
      <MethodDemo
        methodNumber={3}
        title={METHOD_TITLES.METHOD_C}
        code={CODE_SNIPPETS.METHOD_C}
        editorHeight={EDITOR_HEIGHTS.METHOD_C}
        value={nC}
        result={resultC}
        onValueChange={handleChangeC}
      />
    </div>
  );
};

export default SumToN;
