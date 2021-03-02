import './App.css';
import {Button} from 'react-bootstrap'
import Players from './components/Players/Players';
function App() {
  return (
    <>
      <main className="py-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <Players />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
