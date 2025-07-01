import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Helper to create Radix primitive wrappers with forwardRef and className merging.
 * @param Primitive The Radix primitive component to wrap.
 * @param defaultClassName The default className or a function returning className based on props.
 */
export function withRadixRef<P extends { className?: string }>(
  Primitive: React.ElementType,
  defaultClassName: string | ((props: P) => string) = ""
) {
  return React.forwardRef<unknown, P>(
    (
      { className, ...props },
      ref: React.ForwardedRef<unknown>
    ): React.ReactElement | null => {
      const Comp = Primitive;
      return React.createElement(Comp, {
        ...(props as unknown as P),
        ref,
        className: cn(
          typeof defaultClassName === "function"
            ? defaultClassName(props)
            : defaultClassName,
          className
        ),
      });
    }
  );
}
