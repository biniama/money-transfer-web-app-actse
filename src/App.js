import Header from './Header/Header'
import CreateAccount from './CreateAccount/CreateAccount'
import ListAccounts from "./ListAccounts/ListAccounts";
import {Route, Switch} from "react-router-dom";

const App = () => {
    // <> </> is called a React Fragment
    return (
        <>
            <Header/>
            <Switch>
                <Route
                    exact
                    path="/"
                    render={() => <CreateAccount />}/>

                <Route
                    exact
                    path='/admin/listAccounts'
                    render={() => <ListAccounts />} />
            </Switch>
        </>
    );
}

export default App;


