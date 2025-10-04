import { Card, CardContent } from "@/components/ui/card";
import type { ErrorStateProps } from "../types";

/**
 * Error state component displayed when currency data fetch fails
 */
const ErrorState = ({ error }: ErrorStateProps) => {
  return (
    <div className="w-full max-w-md mx-auto">
      <Card className="shadow-lg border-red-200">
        <CardContent className="py-8">
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="text-red-500 font-medium">Error Loading Currencies</p>
            <p className="text-sm text-muted-foreground">{error}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ErrorState;
