import "./App.css";
import Card from "./components/Card/Card";
import food from "./assets/food.jpg"; // Tell webpack this JS file uses this image

function App() {
  const recipeAuthor = "Kodluyoruz";
  const recipeItem = {
    title: "Analı Kızlı",
    date: "12 Ocak 2021, Salı",
    image: "https://im.haberturk.com/2020/10/16/ver1602832041/2837284_414x414.jpg",
    description:
      "Analı kızlı çorbası, Türkiye'nin Adana bölgesinde sık tüketilen bir çorbadır. Adana Analı Kızlı, ana adı verilen yaklaşık 3 cm çapında, 35-40 g ağırlığında içli köfteler ile kız adı verilen içli köftenin dış hamurundan yapılan yaklaşık 1 cm çapında, yaklaşık 2 g ağırlığında kürelerin olduğu yemektir.",
  };

  const likeCount = 193;
  const isLiked = true;

  return (
    <div className="App">
      <header className="App-header">
        <Card
          /*author={recipeAuthor}*/
          isLiked = {isLiked}
          likeCount = {likeCount}
          recipeItem = {recipeItem}

        />
      </header>
    </div>
  );
}

export default App;
