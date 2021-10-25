import './App.css';
import { AddTicketForm } from './components/addTicketForm/AddTicketForm.comp';
import { DefaultLayout } from './layout/DefaultLayout';
import { AddTicket } from './pages/add-ticket/AddTicket.page';
import { Dashboard } from './pages/dashboard/Dashboard.page';
//import{Button} from 'react-bootstrap'
import { Entry } from './pages/entry/Entry.page';

function App() {
  return (
    <div className="App">
      <DefaultLayout>
       {/*<Dashboard/>*/}
       <AddTicket/>
      </DefaultLayout>
     
    </div>
  );
}

export default App;
