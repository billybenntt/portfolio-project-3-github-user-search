function Color (props) {

  const { hexColor, blackText } = props

  const styles = {
    backgroundColor: hexColor,
    color: blackText ? '#2B3442' : '#FFF'
  }

  return (
    <div className="color">
      <div className="color-box" style={styles}>
        <p>{hexColor ? hexColor : '#FFFFFF'}</p>
      </div>
      <div className="color-description">
        <h4>RGB</h4>
        <p>0, 121, 255</p>
      </div>
      <div className="color-description">
        <h4>HSL</h4>
        <p>212°, 100%, 50%</p>
      </div>
    </div>
  )
}

export default Color
