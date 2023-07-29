function Color (props) {

  return (
    <div className="color">
      <div className="color-box" style={{ backgroundColor: 'dodgerblue' }}>
        <p>#0079FF</p>
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

function DesignSystem () {
  return (
    <div className="design-system">
      <div className="design-system-center">
        {/* HEADER */}
        <header className="header">
          <h3>dev_Finder</h3>
          <h3>Design System</h3>
        </header>

        {/*COLORS */}
        <section className="section colors">
          <div className="section-title">
            <h3><span>1</span>Colors</h3>
          </div>


          <div className="colors-center">
            {/*GROUP 1*/}
            <div>
              <h4 className="colors-group-title">light mode colors</h4>
              <div className="colors-group">
                <Color/>
                <Color/>
                <Color/>
                <Color/>
                <Color/>

              </div>
            </div>

            {/*GROUP 2*/}
            <div>
              <h4 className="colors-group-title">Dark mode colors</h4>
              <div className="colors-group">
                <Color/>
                <Color/>
                <Color/>
                <Color/>
              </div>
            </div>
          </div>
        </section>

        {/* TYPOGRAPHY */}
        <section className="section typography">
          <div className="section-title">
            <h3><span>2</span>Typography</h3>
          </div>
        </section>

        {/* INTERACTIVE */}
        <section className="section interactive">
          <div className="section-title">
            <h3><span>3</span>Interactive Elements</h3>
          </div>

          <div>
            2
          </div>
        </section>
      </div>
    </div>
  )
}

export default DesignSystem
