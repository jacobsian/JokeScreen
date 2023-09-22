import { Container, CssBaseline, Grid, Typography, Link, Button } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { getRandomJoke, Joke } from './jokeProvider';
import { useEffect, useState } from 'react';

function App() {

  const updateJoke = async () => {
    const tempJoke = await getRandomJoke();
    setIsShow(false);
    setJoke(tempJoke);
  };

  const [isShow, setIsShow] = useState(false);

  const handleClick = () => {
    setIsShow(!isShow);
  };

  const [joke, setJoke] = useState<Joke>({
    id: 0,
    type: "",
    setup: "",
    punchline: ""
  });

  useEffect(()=>{
    updateJoke();

    return () => {};
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Grid
          container
          justifyContent='center'
          alignItems='center'
          direction="column" 
        >
          <Grid item container  
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
          p={2}>
             <Button variant="contained" onClick={() => {
                updateJoke();
              }}>Get A New Random Joke</Button>
             <Link href="https://github.com/15Dkatz/official_joke_api">View Api Docs</Link>
          </Grid>
          <Grid item>
            <Typography variant='body1'>{joke.setup}</Typography>
          </Grid>
          <Grid item>
          <Button variant="contained" onClick={() => {
                handleClick();
              }}>Show Punchline</Button>
          </Grid>
          {isShow &&
          <Grid item>  
            <Typography variant='body1'>{joke.punchline}</Typography>
          </Grid>
          }
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;

