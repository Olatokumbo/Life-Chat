import React from "react";
import { Typography, Paper, Grid} from "@material-ui/core";
import style from "./Home.module.css";
const Home = () => {
  return (
    <div className={style.container}>
      <Typography>Welcome to Life Chat</Typography>
      <Grid className={style.header}>
        <Paper className={style.headerPaper}/>
        <Paper  className={style.headerPaper} />
      </Grid>
    </div>
  );
};

export default Home;
