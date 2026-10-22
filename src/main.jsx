import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HelmetProvider } from 'react-helmet-async'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Application Render Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '40px', fontFamily: 'system-ui, sans-serif', background: '#0f172a', color: '#f8fafc', minHeight: '100vh' }}>
          <h1 style={{ color: '#f87171', fontSize: '24px', marginBottom: '16px' }}>Runtime Render Error</h1>
          <p style={{ color: '#cbd5e1', fontSize: '16px', marginBottom: '12px' }}>
            <strong>Error Message:</strong> {this.state.error?.toString()}
          </p>
          <pre style={{ background: '#1e293b', padding: '16px', borderRadius: '8px', color: '#f1f5f9', overflowX: 'auto', fontSize: '13px' }}>
            {this.state.error?.stack}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

const rootElement = document.getElementById('root');

const app = (
  <React.StrictMode>
    <HelmetProvider>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </HelmetProvider>
  </React.StrictMode>
);

// Hydrate if pre-rendered HTML exists, otherwise use standard render
if (rootElement.hasChildNodes()) {
  ReactDOM.hydrateRoot(rootElement, app);
} else {
  ReactDOM.createRoot(rootElement).render(app);
}
