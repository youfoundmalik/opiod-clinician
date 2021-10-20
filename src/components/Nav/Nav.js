import React from 'react'
import {Link as NavLink} from 'react-scroll'

const Nav = () => {
    return (
        <header className='headerArea'>
            <div className='links'>
                <NavLink to="welcome"
                activeClassName="active"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-51}
                >HOME</NavLink>
                <NavLink to="why"
                activeClassName="active"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-51}
                >WHY</NavLink>
                <NavLink to="what"
                activeClassName="active"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-51}
                >WHAT</NavLink>
                <NavLink to="who"
                activeClassName="active"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-51}
                >{window.screen.width > 480 ?  'WHO CAN FILL THIS OUT' : 'WHO'}
                </NavLink>
                <NavLink to="using"
                activeClassName="active"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-51}
                >{window.screen.width > 480 ?  'USING THE TOOL' : 'USING'}
                </NavLink>
                <NavLink to="results"
                activeClassName="active"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-51}
                >RESULTS</NavLink>
                <NavLink to="credits"
                id="last"
                activeClassName="active"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-51}
                >CREDITS</NavLink>
            </div>
        </header>
    )
}

export default Nav
