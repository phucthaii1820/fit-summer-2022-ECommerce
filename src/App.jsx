import "./App.css";
import { Layout } from "antd";
import Header from "./component/Header/Header";
import UserProfile from "./page/UserProfile/UserProfile";

function App() {
    return (
        <Layout className="App">
            <Header></Header>
            <UserProfile></UserProfile>
        </Layout>
    );
}

export default App;
