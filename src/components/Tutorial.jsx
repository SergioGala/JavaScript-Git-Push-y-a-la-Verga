// Tutorial.jsx
import  { useState } from 'react';
import NavigationMenu from './NavigationMenu';
import TheorySection from './TheorySection';
import CodeEditor from './CodeEditor';
import Console from './Console';
import { sections } from './content';

export function Tutorial  (){
  const [selectedSection, setSelectedSection] = useState('variables');
  const [consoleOutput, setConsoleOutput] = useState([]);
  const [userInput, setUserInput] = useState('');

  const styles = {
    pageWrapper: {
      minHeight: '100vh',
      width: '100vw',
      backgroundColor: '#f0f2f5',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '40px 20px',
      boxSizing: 'border-box'
    },
    mainContainer: {
      width: '100%',
      maxWidth: '800px',
      margin: '0 auto'
    },
    mainTitle: {
      color: '#2c3e50',
      fontSize: '2.8em',
      marginBottom: '40px',
      textAlign: 'center',
      fontWeight: 'bold',
      background: 'linear-gradient(45deg, #2c3e50, #3498db)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    section: {
      backgroundColor: 'white',
      borderRadius: '15px',
      padding: '30px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      width: '100%',
      boxSizing: 'border-box'
    }
  };

  const runCode = (code) => {
    try {
      const safeEval = (code) => {
        const console = {
          log: (...args) => {
            setConsoleOutput(prev => [...prev, { type: 'output', content: args.join(' ') }]);
          },
          error: (...args) => {
            setConsoleOutput(prev => [...prev, { type: 'error', content: args.join(' ') }]);
          }
        };
        
        try {
          eval(code);
        } catch (error) {
          console.error(error.message);
        }
      };

      setConsoleOutput([]);
      safeEval(code || "console.log('Escribe código JavaScript aquí');");
    } catch (error) {
      setConsoleOutput([{ type: 'error', content: error.message }]);
    }
  };

  const clearConsole = () => {
    setConsoleOutput([]);
  };

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.mainContainer}>
        <h1 style={styles.mainTitle}>Tutorial Interactivo de JavaScript</h1>
        
        <NavigationMenu
          sections={sections}
          activeSection={selectedSection}
          onSelect={(section) => {
            setSelectedSection(section);
            setUserInput('');
            clearConsole();
          }}
        />

        <div style={styles.section}>
          <TheorySection content={sections[selectedSection].theory} />
          
          <CodeEditor
  code={userInput}
  onChange={setUserInput}
  onRun={() => runCode(userInput)}
  onClear={clearConsole}
  section={selectedSection}
/>
          
          <Console output={consoleOutput} />
        </div>
      </div>
    </div>
  );
};

export default Tutorial;