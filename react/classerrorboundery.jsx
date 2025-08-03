import React, { Component } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function Card1() {
  return <div>hi there</div>;
}

function Card2() {
  return <div>hello</div>;
}

// ✅ Proper Error Boundary
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: true };
  }

  // ✅ Called when a child throws
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  // ✅ Called to log error details
  componentDidCatch(error, info) {
    console.error("Error caught in boundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ background: "red", padding: 20, margin: 10 }}>
          Something went wrong
        </div>
      );
    }
    return this.props.children;
  }
}

const App = () => {
  return (
    <div>
      <ErrorBoundary>
        <Card1 />
      </ErrorBoundary>
      
        <Card2 />
      
    </div>
  );
};

export default App;
