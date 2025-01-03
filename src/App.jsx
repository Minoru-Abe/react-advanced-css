import logo from './logo.svg';
import './App.css';
import { InlineStyle } from './components/InlineStyle';
import { CSSModules } from './components/CSSModules';
import { StyledJsx } from './components/StyledJsx';
import { StyledComponents } from './components/StyledComponents';
import { Emotion } from './components/Emotion';

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CSSModules />
      <StyledJsx />
      <StyledComponents />
      <Emotion />
    </div>
  );
}
