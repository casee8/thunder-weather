import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import About from "./components/pages/About";
import PageNotFound from "./components/pages/PageNotFound";
import Weather from "./components/weather/Weather";
import "./App.css";

class App extends React.Component {
  // const [weatherData, setWeatherData] = useState();
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(
  //     (position) => {
  //       const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial&exclude=minutely,hourly,daily,alerts&appid=${process.env.REACT_APP_OWEATHER_API_KEY}`;

  //       fetch(url)
  //         .then((res) => res.json())
  //         .then((data) => {
  //           setWeatherData(data);
  //           setLoading(false);
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //         });
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }, []);

  constructor() {
    super();
    this.state = {
      weatherData: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial&exclude=minutely,hourly,daily,alerts&appid=${process.env.REACT_APP_OWEATHER_API_KEY}`;
        fetch(url)
          .then((res) => res.json())
          .then((data) => {
            this.setState({ weatherData: data });
            this.setState({ loading: false });
          })
          .catch((err) => {
            console.log(err);
          });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route
              exact
              path='/'
              element={<Weather weatherData={this.state.weatherData} />}
            ></Route>
            <Route exact path='/about' element={<About />}></Route>
            <Route path='*' element={<PageNotFound />}></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
