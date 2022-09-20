import "./App.js";

import User from "./components/User";

const friends = [
  {
    id: 1,
    name: "Bernard",
  },
  {
    id: 2,
    name: "Manny",
  },
]

function App(){
  return (
    <>
      <User 
      name ="Fran"
      surname = "Katzenjammer"
      isLoggedIn = {true} 
      friends = {friends} 
      address = {{
        title: "Bloomsbury/London",
        zip: 12345
      }}
      />
    </>
  );
}

export default App;