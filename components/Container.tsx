import React from "react";

export function Container({ children, ...props }: React.ComponentProps<"div">) {
  return (
    <div className="max-w-5xl mx-auto w-full h-full px-4 md:px-0" {...props}>
      {" "}
      {children}{" "}
    </div>
  );
}
