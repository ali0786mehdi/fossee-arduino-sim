import { useState } from 'react';
import './App.css';

function App() {
  const [isLedOn, setIsLedOn] = useState(false);
// New state for Serial Monitor logs
  const [logs, setLogs] = useState(["Serial Initialized..."]);

  const toggleSystem = () => {
    const newState = !isLedOn;
    setIsLedOn(newState);
    
    // Add a timestamped log entry
    const timestamp = new Date().toLocaleTimeString();
    const message = newState ? "LED turned ON" : "LED turned OFF";
    setLogs(prevLogs => [`[${timestamp}] ${message}`, ...prevLogs.slice(0, 4)]); // Keep last 5 logs
  };
  return (
    <div className="container">
      <h1>Arduino Simulator V1.0</h1>
      
      <div className="simulator-area">
        {/* IMAGE */}
        <img src="/board.png" alt="Arduino Uno" className="board-img" />

        {/* LED - Adjust Top/Left if needed */}
        <div 
          className={`led ${isLedOn ? 'on' : ''}`} 
          style={{ top: '35px', left: '295px' }} 
        ></div>

        {/* BUTTON - I put it near the bottom left of the board */}
        <button 
          className="push-button"
          onClick={toggleSystem}
          style={{ top: '350px', left: '20px' }}
          title="Push to toggle LED"
        >
          PUSH
        </button>
      </div>

      {/* CODE EDITOR PANEL */}
      <div className="code-panel">
        <div className="panel-header">
          <span className="dot" style={{background:'#ff5f56'}}></span>
          <span className="dot" style={{background:'#ffbd2e'}}></span>
          <span className="dot" style={{background:'#27c93f'}}></span>
          <span style={{marginLeft: '10px'}}>main.cpp</span>
        </div>
        
        <pre>
          <span className="keyword">void</span> <span className="func">setup</span>() {'{'}{'\n'}
          {'  '}<span className="func">pinMode</span>(13, <span className="const">OUTPUT</span>); <span className="comment">// Initialize LED pin</span>{'\n'}
          {'}'}{'\n\n'}
          
          <span className="keyword">void</span> <span className="func">loop</span>() {'{'}{'\n'}
          {'  '}<span className="comment">// Button State: {isLedOn ? 'PRESSED' : 'RELEASED'}</span>{'\n'}
          {'  '}<span className="keyword">if</span> ({isLedOn.toString()}) {'{'}{'\n'}
          {'    '}<span className="func">digitalWrite</span>(13, <span className="const">HIGH</span>);{'\n'}
          {'  '} {'}'} <span className="keyword">else</span> {'{'}{'\n'}
          {'    '}<span className="func">digitalWrite</span>(13, <span className="const">LOW</span>);{'\n'}
          {'  '} {'}'}{'\n'}
          {'}'}
        </pre>
      </div>
        {/* SERIAL MONITOR PANEL */}
      <div className="serial-monitor">
        <div className="panel-header" style={{background: '#333', color: '#fff'}}>
          <span style={{fontSize: '12px'}}>SEARCH</span> 
          <span style={{marginLeft: 'auto'}}>9600 baud</span>
        </div>
        <div className="monitor-content">
          {logs.map((log, index) => (
            <div key={index} style={{borderBottom: '1px solid #333', padding: '2px 0'}}>
              <span style={{color: '#00979d'}}>➜ </span> {log}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;