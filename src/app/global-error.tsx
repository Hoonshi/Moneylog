// error.tsx
"use client";
import { useEffect } from "react";
import { ErrorFallbackUI } from "@/components/ui/errorFallbackUI";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("🚨 [System Error 낚아챔]:", error);
  }, [error]);

  return <ErrorFallbackUI error={error} resetErrorBoundary={reset} />;
}
