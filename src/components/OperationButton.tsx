
export default function OperationButton ({operation, dispatch, children}: {dispatch: any; operation: string; children: any[]}) {
  return <button
    className="operation"
    onClick={
      () => dispatch({type: 'add-operation', payload: {operation}})
    }>
      {children}
    </button>
}
