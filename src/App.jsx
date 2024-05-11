// import './index.css'
import YtLogo from './assets/ytlogo.svg?react'
import HamburgerIcon from './assets/hamburger.svg?react'
import Magnifier from './assets/magnifier.svg?react'

function App() {

  return (

    <div id='navbar' style={styles.navbar}>
      <div id="hamburger-ytlogo-container" style={styles.hamburgerYtLogoContainer}>
        <div id="hamburger-container" style={styles.hamburgerContainer}>
          <div id="svg-container" style={styles.svgContainer}>

            <HamburgerIcon />
            {/* considred a good practice to instead make a div inside the svg and then */}
          </div>
        </div>
        <div style={{...styles.hamburgerContainer, width: "200px", marginLeft: "-7px"}}>
          <div style={styles.svgContainer}>
            <YtLogo />
          </div>
        </div>
      </div>

      <div id="search" style={{ width: '500px', height: '50px', background: 'teal', display: 'flex', flexDirection: 'row', justifyContent: "center" }}>
        <div id="searchbar" style= {{height: '50px', border: "1px solid grey", borderRadius: "40px", overflow: "hidden", background: 'orange', display: 'flex', flexDirection: 'row', alignItems: "center"}}>
          <div id="search" style={{marginLeft: "10px", width: '300px', height: '30px',background : 'none'}}>
            <input type="text" placeholder='hellohello search ples' style={{height: "100%", width: "100%", boxSizing: "border-box", outline: "none", border: "none", background: "transparent"}}/>
          </div>
          <div id="magnifier" style={{width: "50px", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#555555"}}>
            <div id="mag-svg" style={{width: 30}}>
              <Magnifier />
            </div>

          </div>

        </div>
      </div>

      <div style={{ width: '200px', height: '50px', background: 'indigo' }}>

      </div>
    </div>
  )
}

const styles = {
  navbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  hamburgerYtLogoContainer: {
    height: '50px',
    background: 'orange',
    display: 'flex',
    flexDirection: 'row'
  },
  hamburgerContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: '50px',
    // height: '50px',
  },
  svgContainer: {
    height: '35px',
    // marginLeft: '15px',
    // width: '35px',
    // background: 'blue',
  }
}

export default App
