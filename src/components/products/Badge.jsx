
function Badge({ text }) {
  return (
    <span className={`badge ${text === 'New' ? 'badge-new' : ''}`}>
      {text}
    </span>
  )
}

export default Badge
