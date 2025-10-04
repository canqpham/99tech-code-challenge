import { Button } from "@/components/ui/button";
import { ArrowDownUp } from "lucide-react";
import type { SwapButtonProps } from "../types";

/**
 * Button to swap from/to currencies
 */
export const SwapButton = ({ onClick }: SwapButtonProps) => {
  return (
    <div className="flex justify-center">
      <Button
        variant="outline"
        size="icon"
        onClick={onClick}
        className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
      >
        <ArrowDownUp className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default SwapButton;
