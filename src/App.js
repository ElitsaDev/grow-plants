import logo from './logo.svg';
import './App.css';
import ActionAreaCard from './components/Card';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        
          {/* <MonthCareCalendar /> */}
        
        
        <ActionAreaCard />
        {/* https://agro-apteka.com/userfiles/product_files_shared/beans_germination.mp4 */}
      </header>
    </div>
  );
}

export default App;
