import "./App.css";
import Profile from "./Components/Profile/Profile";
import amal from "./amal.jpg";

function App() {
    const handleAlert = (name) => {
        alert(`this is ${name}`);
    };
    return (
        <div className="App">
            <Profile
                fullName="Amal Lahmar"
                bio="“This team had a direct impact in me obtaining a new job at Amazon Web Services. They wrote a new resume and profile (and installed it) with the latest technology keywords such as AWS, cloud, virtualization, machine learning and IoT. I will continue to recommend them to my colleagues.”"
                profession="Embedded Systems Engineer"
                handleAlert={handleAlert}
            >
                <img className="im" src={amal} alt="Lahmar" />
            </Profile>
        </div>
    );
}

export default App;
