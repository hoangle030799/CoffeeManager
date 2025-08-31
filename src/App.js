// css
import './assets/css/bootstrap.min.css'
import './assets/css/typography.css'
import './assets/css/style.css'
import './assets/css/style-rtl.css'
import './assets/css/responsive.css'
import './assets/fullcalendar/core/main.css'
import './assets/fullcalendar/daygrid/main.css'
import './assets/fullcalendar/timegrid/main.css'
import './assets/css/flatpickr.min.css'
import "choices.js/public/assets/styles/choices.min.css";
import "flatpickr/dist/flatpickr.css";

// Redux Selector / Action
import { useDispatch } from 'react-redux';

// import state selectors
import { setSetting } from './store/setting/actions'
import fakeSalesLogs from "./salesLogs.json";
import importedLogs from "./salesLogs_July2025.json";
import { useEffect } from "react";

function App(props) {
  const dispatch = useDispatch()
  dispatch(setSetting())
  useEffect(() => {
    const existingLogs = localStorage.getItem("salesLogs");
    if (!existingLogs) {
      localStorage.setItem("salesLogs", JSON.stringify(fakeSalesLogs));
    }
  }, []);
  useEffect(() => {
    const existingLogs = JSON.parse(localStorage.getItem("salesLogs")) || [];

    const mergedLogs = [...existingLogs];
    importedLogs.forEach((log) => {
      if (!mergedLogs.find((item) => item.id === log.id)) {
        mergedLogs.push(log);
      }
    });

    localStorage.setItem("salesLogs", JSON.stringify(mergedLogs));
  }, []);
  return (
    <div className="App">
      {props.children}
    </div>
  );
}

export default App;
