import './App.css';
import { DefaultLayout } from './layout/DefaultLayout';
import { Dashboard } from './pages/dashboard/Dashboard.page';
//import{Button} from 'react-bootstrap'
import { Entry } from './pages/entry/Entry.page';

function App() {
  return (
    <div className="App">
      <DefaultLayout>
       <Dashboard/>
      </DefaultLayout>
     
    </div>
  );
}

export default App;
