import logo from './logo.svg';
import './App.css';
import { InlineStyle } from './components/InlineStyle';
import { CSSModules } from './components/CSSModules';
import { StyledJsx } from './components/StyledJsx';

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CSSModules />
      <StyledJsx />
    </div>
  );
}
