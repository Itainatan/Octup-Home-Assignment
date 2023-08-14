import { Button, CircularProgress, Toolbar, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { AppBar, } from "@src/common-components";
import * as styles from "./styles";
import useHome from "./hooks";
import HeroCard from "../Card";
import { Hero } from "../types";

const Home = () => {
  const { onSubmit, isLoading, register, history, } =
    useHome();

  return (
    <div css={styles.container}>

      <AppBar position="absolute" open={false} >
        <Toolbar>
          <Typography component="h1" variant="h6" color="inherit" noWrap>
            Octup - SuperHero App
          </Typography>
        </Toolbar>
      </AppBar>

      <div css={styles.card}>
        <form onSubmit={onSubmit} css={styles.form}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="enter superhero name"
            css={styles.input}
            {...register("search", {
              required: true,
            })}
          />
          {isLoading ? (
            <CircularProgress color="inherit" />
          ) : (
            <Button type="submit" variant="contained" css={styles.submitButton} onClick={onSubmit}>
              Search
            </Button>
          )}
        </form>

        <div css={styles.dataContainer}>
          {history.map((hero: Hero) => <HeroCard key={hero.id} hero={hero} />)}
        </div>

      </div>
    </div>
  );
};

export default Home;
