import { ComponentProps } from "react";

export function Heroo({ children }: ComponentProps<"div">) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "end",
        height: "100vh",
        padding:
          "0 var(--sds-size-space-800) var(--sds-size-space-800) var(--sds-size-space-800)",
      }}
    >
      <div style={{ border: "1px solid" }}>{children}</div>
    </div>
  );
}
