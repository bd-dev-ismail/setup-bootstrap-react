import Navbar from './components/Navbar/Navbar'
import './App.css';
import CardGroupF from './components/CardGroup/CardGroup';
function App() {
     const hotness = [
       {
         id: 1,
         name: "Mia Malkova",
         size: 36,
         image:
           "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
       },

       {
         id: 2,
         name: "Mia Khalifa",
         size: 36,
         image:
           "https://images.unsplash.com/photo-1596217431227-472b0c00da7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
       },

       {
         id: 3,
         name: "Arina John",
         size: 34,
         image:
           "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
       },
     ];
  return (
    <div className="App">
      <Navbar/>
      {
        hotness.map(hot=> <CardGroupF hot={hot} key={hot.id}></CardGroupF>)
      }
    </div>
  );
}

export default App;
