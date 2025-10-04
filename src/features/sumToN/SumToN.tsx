import { sumToN_a, sumToN_b, sumToN_c } from "./utils";
import { CODE_SNIPPETS, METHOD_TITLES, EDITOR_HEIGHTS } from "./constants";
import { MethodDemo } from "./components";

/**
 * Three ways to sum from 1 to n
 */
const SumToN = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* Method A: Mathematics Formula */}
      <MethodDemo
        methodNumber={1}
        title={METHOD_TITLES.METHOD_A}
        code={CODE_SNIPPETS.METHOD_A}
        editorHeight={EDITOR_HEIGHTS.METHOD_A}
        sumToN={sumToN_a}
      />

      {/* Method B: Recursion */}
      <MethodDemo
        methodNumber={2}
        title={METHOD_TITLES.METHOD_B}
        code={CODE_SNIPPETS.METHOD_B}
        editorHeight={EDITOR_HEIGHTS.METHOD_B}
        sumToN={sumToN_b}
      />

      {/* Method C: Loop */}
      <MethodDemo
        methodNumber={3}
        title={METHOD_TITLES.METHOD_C}
        code={CODE_SNIPPETS.METHOD_C}
        editorHeight={EDITOR_HEIGHTS.METHOD_C}
        sumToN={sumToN_c}
      />
    </div>
  );
};

export default SumToN;
