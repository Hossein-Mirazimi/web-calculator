
export default function DigitButton ({dispatch, digit}: {dispatch: any; digit: string}) {
  return <button onClick={(e) => {
    e.preventDefault();
    console.log({dispatch, digit})
    dispatch({type: 'add-digit', payload: {digit}});
  }}>{digit}</button>
}
