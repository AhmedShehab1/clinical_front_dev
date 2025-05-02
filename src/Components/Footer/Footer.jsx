import React from "react";

export default function Footer() {
  return (
    <footer className="bg-body-tertiary text-center text-lg-start">
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(74, 127, 176, 0.98)", color: "White" }}
      >
        © {new Date().getFullYear()} Copyright:
        <div className="text-body ms-1">CopyRights reserved For GAMMA Team</div>
      </div>
    </footer>
  );
}
