

const App = props => {
    const [currentTheme, setCurrentTheme] = useState(light);
    const {data}  = useQuery(IS_LOGGED_IN);
    
  
    const handleClick = () => {
      setCurrentTheme(currentTheme === light ? dark : light);
    };
  
    document.body.style.backgroundColor = currentTheme.backgroundColor;
  
    return (
      <>
        <ThemeProvider theme={currentTheme}>
          <NavbarComponent changeTheme={handleClick} />
          <Layout>
            <Suspense>
              <Switch>
                <Route exact path="/login" component={LoginForm} />
                <Route exact path="/episodes" component={Episodes} />
                <Route
                  exact
                  path="/episodes/:episodeId"
                  component={EpisodesPreview}
                />
                <Route exact path="/characters" component={Characters} />
                <Route
                  exact
                  path="/characters/:characterId"
                  component={CharacterPreview}
                />
                <Route
                  exact
                  path="/starships/:starshipId"
                  component={StrarshipPreview}
                />
                <Redirect to="/login" />
              </Switch>
            </Suspense>
          </Layout>
          <GlobalStyle />
        </ThemeProvider>
      </>
    );
  };