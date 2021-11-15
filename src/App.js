import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


//import { TicketListing } from './layout/ticket-listing/Ticket-Listing.page';
import { TicketListing } from './pages/ticket-listing/Ticket-Listing.page';
import { AddTicket } from './pages/add-ticket/AddTicket.page';
import { Dashboard } from './pages/dashboard/Dashboard.page';
//import{Button} from 'react-bootstrap'
import { Entry } from './pages/entry/Entry.page';
import { Ticket } from './pages/ticket/Ticket.page';
import { PrivateRoute } from './components/private-route/PrivateRoute';

function App() {
  return (
    <div className="App">
    <Router>
    <Switch>
    <Route exact path="/"><Entry/></Route>
    <PrivateRoute  path="/dashboard"><Dashboard/></PrivateRoute>
    <PrivateRoute  path="/addticket"><AddTicket/></PrivateRoute>
    <PrivateRoute  path="/ticket/:id"><Ticket/></PrivateRoute>
    <PrivateRoute  path="/tickets"><TicketListing/></PrivateRoute>
    
    </Switch>
     </Router>
    </div>
  );
}

export default App;
