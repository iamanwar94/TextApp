import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';



function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} key={new Date()} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* /users --> Component 1
        /users/home --> Component 2 */}
        <TextForm showAlert={showAlert} heading="Try TextApp - word counter, 
        character counter, remove extra spaces, copy the whole text, convert 
        your text to upper or lower case and much more" mode={mode} />
      </div>
    </>
  );
}

export default App;