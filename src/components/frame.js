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
            <NavItem route="https://us21.list-manage.com/contact-form?u=5d94806c3a1f74529e81a0f6a&form_id=dd43a125c2aed2ae5eb5fd5b2513a24d" linkText="Contact"/>
        </div>
      </div>


      <h2 className="text-3xl font-extrabold font-medium text-blue-600 mb-3">{ pageTitle }</h2>
      { children }
    </main>
  )
}

export default Frame
