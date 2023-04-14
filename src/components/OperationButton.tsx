
export default function OperationButton (props: {dispatch: any; operation: string; children: any[]}) {
  return <button
    className="operation"
    onClick={
      () => props.dispatch({type: 'add-operation', payload: props.operation})
    }>
      {props.children}
    </button>
}
