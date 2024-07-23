import { getToken } from "firebase/messaging";
import { useEffect } from "react";
import "./App.css";
import { messaging } from "./firebase";

function App() {
  async function requestPermission() {
    const permission = await Notification.requestPermission();

    if (permission === "granted") {
      const token = await getToken(messaging, {
        vapidKey: process.env.VAPID_KEY,
      });
      console.log("Token Gen", token);
    } else if (permission === "denied") {
      alert("Notification Denied");
    }
  }
  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <div className="header">
      <h1 className="header-title">Notification Test</h1>
    </div>
  );
}

export default App;
