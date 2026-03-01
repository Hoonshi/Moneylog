"use client";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallbackUI } from "./errorFallbackUI";

export function QueryErrorBoundary({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallbackUI}>
      {children}
    </ErrorBoundary>
  );
}
