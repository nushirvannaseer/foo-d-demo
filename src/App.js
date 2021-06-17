import AccountTypeSelection from "./components/accountTypeSelection";

import "./App.css";
import RestaurantProfile from "./components/restaurantProfile";
import UserProfile from "./components/userProfile";
import RecipeView from "./components/recipeView";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/userProfile" component={UserProfile}></Route>
        <Route
          exact
          path="/restaurantProfile"
          component={RestaurantProfile}
        ></Route>
        <Route path="/recipeView" component={RecipeView}></Route>

        <Route path="/" component={AccountTypeSelection}></Route>
      </Switch>
    </div>
  );
}

export default App;
