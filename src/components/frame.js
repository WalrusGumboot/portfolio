import * as React from "react"
import NavItem from './navitem'
import { Link } from "gatsby"


const Frame = ( { pageTitle, children } ) => {
  return (
    <main className="px-64 py-6 w-full">
      <title>{ pageTitle }</title>


      <div className="flex flex-row justify-between mb-3 items-center border-b-2">
        <Link to="/">
            <h1 className="text-4xl font-extrabold">Simeon's Blogfolio</h1>
        </Link>

        <div className="flex flex-row gap-x-3">
            <NavItem route="/"      linkText="Home"/>
            <NavItem route="/music" linkText="Music"/>
            <NavItem route="/blog"  linkText="Blog"/>
        </div>
      </div>


      <h2 className="text-3xl font-extrabold font-medium text-blue-600 mb-3">{ pageTitle }</h2>
      { children }
    </main>
  )
}

export default Frame
