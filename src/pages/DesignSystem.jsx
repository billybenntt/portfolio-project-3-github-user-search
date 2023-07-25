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
              <h4>LIGHT MODE COLORS</h4>

              <div className="colors-group">
                <div className="color">
                  <div></div>


                </div>


              </div>
            </div>

            {/*GROUP 2*/}
            <div>
              <h4>DARK MODE COLORS</h4>

              <div className="colors-group">

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
