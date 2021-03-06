import AccountTypeSelection from "./components/accountTypeSelection";

import "./App.css";
import RestaurantProfile from "./components/restaurantProfile";
import UserProfile from "./components/userProfile";
import RecipeView from "./components/recipeView";
import { Switch, Route } from "react-router-dom";
import AddRecipe from "./components/addRecipe";
import AddRestaurant from "./components/addRestaurant";
import AddRestDet from "./components/addRestDetails";
import AddMenuItem from "./components/addMenuItem";
import SearchResults from "./components/searchResults";
import ShowResults from "./components/showResults";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/addRecipe" component={AddRecipe}></Route>
        <Route exact path="/search" component={ShowResults}></Route>
        <Route exact path="/userProfile" component={UserProfile}></Route>
        <Route exact path="/addRestaurant" component={AddRestaurant}></Route>
        <Route exact path="/addRestDetails" component={AddRestDet}></Route>
        <Route exact path="/addMenuItem" component={AddMenuItem}></Route>
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
