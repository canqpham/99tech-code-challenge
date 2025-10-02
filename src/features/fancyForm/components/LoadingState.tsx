import { Card, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

/**
 * Loading state component displayed while fetching currency data
 */
export const LoadingState = () => {
  return (
    <div className="w-full max-w-md mx-auto">
      <Card className="shadow-lg">
        <CardContent className="flex items-center justify-center py-12">
          <div className="flex flex-col items-center gap-2">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <p className="text-sm text-muted-foreground">
              Loading currencies...
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
