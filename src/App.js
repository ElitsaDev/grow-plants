
import './App.css';
import ActionAreaCard from './components/Card';
import NavBar from './components/NavBar';
import Weather from './components/Weather';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                {/* <video autoPlay muted loop id="myVideo">
                        <source src="https://agro-apteka.com/userfiles/product_files_shared/beans_germination.mp4" type="video/mp4"/>
                </video>*/}
                <div className="content">
                    <h1>Отглеждане на растения</h1>
                    <h1>Времето</h1>
                </div>         
                {/* https://agro-apteka.com/userfiles/product_files_shared/beans_germination.mp4 */}
            </header>
            <Weather />
            <NavBar />
            <main>
                <article>
                    <ActionAreaCard />
                </article>
                <aside>
                    {/* <MonthCareCalendar /> */}
                </aside>
            </main>
        </div>
    );
}

export default App;
