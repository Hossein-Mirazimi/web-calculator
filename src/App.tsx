import { useReducer } from 'react'
import {
  Backspace,
  Divide,
  Equal,
  Multiplication,
  Percentage,
  Plus,
  Minus,
} from './components/icons';
import DigitButton from './components/DigitButton';
import OperationButton from './components/OperationButton';
import './App.scss'

type ReduceType = 'add-digit' | 'add-operation' | 'remove' | 'clear' | 'result';

type ReducerTp = (state: any, { type, payload }: {
  type: ReduceType;
  payload?: {
    digit?: string;
    operation?: string;
  };
}) => any;

function App() {

  const [{ currentOperand }, dispatch] = useReducer<ReducerTp>((state, { type, payload }) => {
    switch (type) {
      case 'add-digit':
        if (payload!.digit === '0' && state.currentOperand == '0') return state;      
        if (payload!.digit === '.' && state.currentOperand.includes('.')) return state;
        return { currentOperand: `${state.currentOperand || ''}${payload!.digit}`};
  
      case 'add-operation':
        if (state.currentOperand == null || isNaN(state.currentOperand[state.currentOperand.length - 1])) return state;
        return { currentOperand: `${state.currentOperand || ''}${payload?.operation?.replace('x', '*')}`};
  
      case 'result':
        return {
          state,
          currentOperand: eval(state.currentOperand).toString(),
        }
  
      case 'remove':
        if (state.currentOperand === 0) return state;
        return { currentOperand: state.currentOperand.length === 1 ? 0 :  state.currentOperand.slice(0, -1)}
  
      case 'clear':
        return { currentOperand: 0 }
    }
  }, { currentOperand: 0 } as { currentOperand: string | number })

  return (
    <div className="calculator-app">
      <div className="output">{ currentOperand }</div>
        <button style={{opacity: 0}}></button>
        <button className='top' onClick={() => dispatch({ type: 'clear' })}>C</button>
        <button className='top' onClick={() => dispatch({ type: 'result' })}><Equal/></button>
        <button className='operation' onClick={() => dispatch({ type: 'remove'})}>
          <Backspace />
        </button>
        <DigitButton digit='1' dispatch={dispatch} />
        <DigitButton digit='2' dispatch={dispatch} />
        <DigitButton digit='3' dispatch={dispatch} />
        <OperationButton operation={<Percentage/>} dispatch={dispatch} />
        <DigitButton digit='4' dispatch={dispatch} />
        <DigitButton digit='5' dispatch={dispatch} />
        <DigitButton digit='6' dispatch={dispatch} />
        <OperationButton operation={<Divide/>} dispatch={dispatch} />
        <DigitButton digit='7' dispatch={dispatch} />
        <DigitButton digit='8' dispatch={dispatch} />
        <DigitButton digit='9' dispatch={dispatch} />
        <OperationButton operation={<Multiplication/>} dispatch={dispatch} />
        <DigitButton digit='0' dispatch={dispatch} />
        <DigitButton digit='.' dispatch={dispatch} />
        <OperationButton operation={<Minus/>} dispatch={dispatch} />
        <OperationButton operation={<Plus/>} dispatch={dispatch} />
      </div>
  )
}

export default App
