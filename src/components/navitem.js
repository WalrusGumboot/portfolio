import * as React from "react"
import { navigate } from "gatsby"

const NavItem = ( { route, linkText } ) => {
  return (
    <div className="flex items-center justify-center hover:bg-emerald-200 w-28 h-8 mx-2 rounded-md hover:cursor-pointer hover:shadow-md transition-all"
         onClick={ () => navigate(route)} role="link">
      <p className="font-manrope">{ linkText }</p>
    </div>
  )
}

export default NavItem
