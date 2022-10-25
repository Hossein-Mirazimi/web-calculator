
export default function OperationButton ({dispatch, operation}: {dispatch: any; operation: JSX.Element}) {
  return <button className="operation" onClick={() => dispatch({type: 'add-operation', payload: {operation}})}>{operation}</button>
}
