import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import { codeExamples, exercises } from './examples';

const CodeEditor = ({ code, onChange, onRun, onClear, section }) => {
  const editorRef = useRef(null);

  useEffect(() => {
    if (editorRef.current) {
      Prism.highlightElement(editorRef.current);
    }
  }, [code]);

  const styles = {
    container: {
      marginTop: '30px'
    },
    editor: {
      width: '100%',
      minHeight: '200px',
      backgroundColor: '#1e1e1e',
      color: '#fff',
      padding: '15px',
      borderRadius: '8px',
      fontFamily: 'Monaco, monospace',
      fontSize: '14px',
      border: 'none',
      resize: 'vertical',
      boxSizing: 'border-box',
      overflow: 'auto',
      lineHeight: '1.5',
      position: 'relative'
    },
    buttonContainer: {
      display: 'flex',
      gap: '10px',
      marginTop: '15px'
    },
    button: {
      padding: '10px 20px',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontSize: '0.9em',
      fontWeight: '500'
    },
    runButton: {
      backgroundColor: '#4CAF50',
      color: 'white'
    },
    clearButton: {
      backgroundColor: '#6c757d',
      color: 'white'
    },
    examplesContainer: {
      marginBottom: '20px',
      padding: '15px',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px'
    },
    exampleButton: {
      padding: '8px 12px',
      margin: '0 8px 8px 0',
      border: '1px solid #ddd',
      borderRadius: '4px',
      backgroundColor: 'white',
      cursor: 'pointer',
      fontSize: '0.9em',
      transition: 'all 0.2s ease',
      '&:hover': {
        backgroundColor: '#f0f0f0',
        borderColor: '#aaa'
      }
    },
    exerciseContainer: {
      marginTop: '30px',
      padding: '20px',
      backgroundColor: '#f0f7ff',
      borderRadius: '8px',
      border: '1px solid #d1e3ff'
    },
    exerciseTitle: {
      fontSize: '1.2em',
      marginBottom: '10px',
      color: '#2c3e50',
      fontWeight: '600'
    },
    exerciseDescription: {
      marginBottom: '15px',
      color: '#34495e',
      lineHeight: '1.6'
    }
  };

  const loadExample = (example) => {
    onChange(example.code);
  };

  const loadExercise = (exercise) => {
    onChange(exercise.initialCode);
  };

  return (
    <div style={styles.container}>
      <div style={styles.examplesContainer}>
        <h3>Ejemplos:</h3>
        {codeExamples[section]?.map((example, index) => (
          <button
            key={index}
            style={styles.exampleButton}
            onClick={() => loadExample(example)}
          >
            {example.title}
          </button>
        ))}
      </div>

      <div style={{ position: 'relative' }}>
        <pre style={styles.editor}>
          <code ref={editorRef} className="language-javascript">
            {code}
          </code>
        </pre>
        <textarea
          style={{
            ...styles.editor,
            position: 'absolute',
            top: 0,
            left: 0,
            opacity: 0.5,
            width: '100%',
            height: '100%',
            background: 'transparent',
            color: 'transparent',
            caretColor: 'white'
          }}
          value={code}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Tab') {
              e.preventDefault();
              const start = e.target.selectionStart;
              const end = e.target.selectionEnd;
              onChange(code.substring(0, start) + '  ' + code.substring(end));
              // Establece la posición del cursor después de la indentación
              setTimeout(() => {
                e.target.selectionStart = e.target.selectionEnd = start + 2;
              }, 0);
            }
          }}
          spellCheck="false"
        />
      </div>

      <div style={styles.buttonContainer}>
        <button 
          style={{...styles.button, ...styles.runButton}}
          onClick={onRun}
        >
          ▶ Ejecutar Código
        </button>
        <button 
          style={{...styles.button, ...styles.clearButton}}
          onClick={onClear}
        >
          ⟲ Limpiar Consola
        </button>
      </div>

      {exercises[section]?.map((exercise, index) => (
        <div key={index} style={styles.exerciseContainer}>
          <h3 style={styles.exerciseTitle}>{exercise.title}</h3>
          <p style={styles.exerciseDescription}>{exercise.description}</p>
          <button
            style={styles.exampleButton}
            onClick={() => loadExercise(exercise)}
          >
            Comenzar Ejercicio
          </button>
        </div>
      ))}
    </div>
  );
};

CodeEditor.propTypes = {
  code: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onRun: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
  section: PropTypes.string.isRequired
};

export default CodeEditor;