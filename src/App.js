import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import Category from "./pages/Category";
import HomePage from "./pages/HomePage";
import ReviewDetails from "./pages/ReviewDetails";
import SiteHeader from "./components/SiteHeader";

const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <div className="App">
          <SiteHeader />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/details/:reviewId" component={ReviewDetails} />
            <Route path="/category/:categoryId" component={Category} />
          </Switch>
        </div>
      </ApolloProvider>
    </Router>
  );
}

export default App;
