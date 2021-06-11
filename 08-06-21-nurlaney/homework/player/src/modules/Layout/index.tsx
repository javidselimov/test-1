import React, { FC } from "react";
import { Drawer } from "../Drawer";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

export const Layout: FC = (props) => {
  return (
    <div className="row" style={{ marginRight: 0 }}>
      <div className="col-md-2" style={{ padding: 0 }}>
        <Drawer />
      </div>
      <div className="col-md-10" style={{ padding: 0 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">News</Typography>
          </Toolbar>
        </AppBar>
        <div className="container mt-5">{props.children}</div>
      </div>
    </div>
  );
};
