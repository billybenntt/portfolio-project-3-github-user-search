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
                <Color hexColor="#0079FF"/>
                <Color hexColor="#697C9A"/>
                <Color hexColor="#4B6A9B"/>
                <Color hexColor="#2B3442"/>
                <Color hexColor="#F6F8FF" blackText={true}/>
                <Color hexColor="#FEFEFE" blackText={true}/>
              </div>
            </div>

            {/*GROUP 2*/}
            <div>
              <h4 className="colors-group-title">Dark mode colors</h4>
              <div className="colors-group">
                <Color hexColor="#0079FF"/>
                <Color hexColor="#FEFEFE" blackText={true}/>
                <Color hexColor="#141D2F"/>
                <Color hexColor="#1E2A47"/>
              </div>
            </div>
          </div>
        </section>

        {/* TYPOGRAPHY */}
        <section className="section typography">
          <div className="section-title">
            <h3><span>2</span>Typography</h3>
          </div>

          <div className="typography-center">
            <div className="typography-group">
              <div className="typography-item">
                <h6 className="typography-title">H1 - Space Mono Bold - 26px - 38px Line Height</h6>
                <h1>The Octocat</h1>
              </div>

              <div className="typography-item">
                <h6 className="typography-title">H2 - Space Mono Bold - 22px - 33px Line Height</h6>
                <h2>Lorem ipsum dolor sit amet</h2>
              </div>

              <div className="typography-item">
                <h6 className="typography-title">H3 - Space Mono Reg. - 16px - 24px Line Height</h6>
                <h3>@octocat</h3>
              </div>

              <div className="typography-item">
                <h6 className="typography-title">H4 - Space Mono Reg - 13px - 20px Line Height</h6>
                <h4>Repos</h4>
              </div>

            </div>

            <div className="typography-group">
              <div className="typography-item">
                <h6 className="typography-title">Body - Space Mono Reg - 15px - 25px Line Height</h6>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat
                  mattis eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque
                  volutpat mattis eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
                  Quisque volutpat mattis eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Donec
                  odio. Quisque volutpat mattis eros.

                </p>
                <br/>
                <p>
                  Quisque volutpat mattis eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Donec
                  odio. Quisque volutpat mattis eros. Lorem ipsum dolor sit amet, consectetuer adipiscing
                  elit.
                  Donec odio. Quisque volutpat mattis eros. consectetuer adipiscing elit. Donec odio. Quisque
                  volutpat mattis eros.</p>
              </div>

            </div>

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
