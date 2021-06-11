import React, { FC } from "react";
import "./drawer.scss";

export const Drawer: FC = () => {
  return (
    <div className="drawermy">
      <ul>
        <li>home</li>
        <li>about</li>
        <li>create</li>
        <li>new</li>
      </ul>
    </div>
  );
};
