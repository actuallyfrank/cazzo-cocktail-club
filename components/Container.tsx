import React from "react";

export function Container({ children, ...props }: React.ComponentProps<"div">) {
  return (
    <div className=" max-w-5xl mx-auto w-full h-full" {...props}>
      {" "}
      {children}{" "}
    </div>
  );
}
