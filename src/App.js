import { useEffect } from "react";
import "./App.css";
import CardList from "./Components/CardList";
import SearchBox from "./Components/SearchBox";
import "./Components/searchBox.css";
import { useState } from "react";

const App = () => {
  const [searchFeild, setSearchFeild] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  const onSearchChange = (event) => {
    const searchFeildString = event.target.value.toLocaleLowerCase();
    setSearchFeild(searchFeildString);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchFeild);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchFeild]);

  return (
    <div style={{ marginTop: "10px" }} className="App">
      <h1 className="app-title">MONSTER ROLODEX</h1>
      <SearchBox
        type="search"
        classname="searchBox"
        onChangeHandler={onSearchChange}
      />
      <CardList monst={filteredMonsters} />
    </div>
  );
};

// class App extends Component{

//   constructor(){
//     super();
//     this.state = {
//       monsters:[],
//       searchFeild:""
//     }

//   }

//   componentDidMount(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response)=> response.json())
//     .then((users) => this.setState(
//       ()=>{return {monsters: users}}
//     ))
//     }

//     onSearchChange = (event) => {
//       const searchFeild = event.target.value.toLocaleLowerCase();
//       this.setState(
//         () =>{
//           return {searchFeild}
//         }
//       )
//     }

//   render(){

//     const {searchFeild,  monsters} = this.state;
//     const filteredMonsters = monsters.filter((monster)=> {
//       return monster.name.toLocaleLowerCase().includes(searchFeild)

//     })
//     return(
//       <div style={ { marginTop:"10px"} }className="App">
//         <h1 className='app-title'> Monster Rolodex</h1>
//         <SearchBox
//         type="search"
//         classname="searchBox"
//         placeholder = {"search"}
//         onChangeHandler={this.onSearchChange}
//         />
//        <CardList monsters = {filteredMonsters}/>

//       </div>
//     )
//   }
// }

export default App;
