import Axios from "axios";
import './App.css';
import { useState } from "react";
import RecipeTile from "./RecipeTile";


function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [healthLabels, setHealthLabels] = useState('vegan')
  
  const url = `https://api.edamam.com/search?q=${query}&app_id=badfa13a&app_key=67b4a79d44c512610e649442b30002b8&health=${healthLabels}`;

  async function getRecipesInfo() {
    var result = await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(result.data);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipesInfo();
  }



  return (
    <div className="App">
   <h1>
   Food Recipe Plaza
   </h1>
   <form className="searchForm" onSubmit={onSubmit}>
    <input className="Input" type="text" placeholder="Enter Ingredient"
     value={query} onChange={(e) => setQuery(e.target.value) }
     />
     <input className="Submit" type="Submit" value="Search" />

     <select className="healthLabels">
      <option onClick={() => setHealthLabels('vegan')}>Vegan</option>
     </select>
   </form>

   <div className="Recipes">
     {recipes.map(recipe => {
      return <RecipeTile recipe={recipe} /> ;
     } )}
   </div>
    </div>
  );
}

export default App;
