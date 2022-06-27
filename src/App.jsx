import "./App.css";
import { Layout } from "antd";
import UserProfile from "./page/UserProfile/UserProfile";
import Header from "./components/Layouts/Header/Header";

function App() {
    return (
        <Layout className="App">
            <Header></Header>
            <UserProfile></UserProfile>
        </Layout>
    );
}

export default App;
