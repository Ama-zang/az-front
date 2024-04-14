import { Outlet } from "react-router-dom";

function SimpleLayout() {
  // props destructure
  // lib hooks
  // state hooks
  // query hooks
  // form hooks
  // calculate value
  // effect
  // handler
  return (
    <div
      css={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Outlet />
    </div>
  );
}

export { SimpleLayout };
