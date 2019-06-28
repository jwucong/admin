
export default ({match}) => {
  const {id} = match.params
  return <div>{id}</div>
}
