import "./App.css";
import { ChangeText } from "./components/ChangeText/ChangeText";
import { CountDown } from "./components/Count/CountDown";
import { List } from "./components/ListWithData/List";
import { MoviesList } from "./components/MoviesListData/MoviesList";
import UseHooks01 from "./components/UseHooks01/UseHooks01";
function App() {
  return (
    <div>
      <UseHooks01 />
      <CountDown />
      <ChangeText />
      <List />
      <MoviesList />
    </div>
  );
}

// class App extends Component {
//   state = {
//     name: "Maryia",
//   };

//   onCnangeName() {
//     this.setState({ name: "Alla" });
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>Hello {this.state.name}</h1>
//         <button onClick={() => this.onCnangeName()}>Click here</button>
//       </div>
//     );
//   }
// }

export default App;
