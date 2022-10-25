
export default function DigitButton ({dispatch, digit}: {dispatch: any; digit: string}) {
  return <button onClick={() => dispatch({type: 'add-digit', payload: {digit}})}>{digit}</button>
}
