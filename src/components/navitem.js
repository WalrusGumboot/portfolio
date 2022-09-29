import * as React from "react"
import { navigate } from "gatsby"

const NavItem = ( { route, linkText } ) => {
  return (
    <div className="flex items-center justify-center hover:bg-blue-200 w-28 h-8 rounded-md hover:cursor-pointer transition-all"
         onClick={ () => navigate(route) } role="link">
      <p className="font-bold">{ linkText }</p>
    </div>
  )
}

export default NavItem
