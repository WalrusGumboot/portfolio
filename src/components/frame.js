import * as React from "react"
import NavItem from './navitem'


const Frame = ( { pageTitle, children } ) => {
  return (
    <main className="px-48 py-6 w-full">
      <title>{ pageTitle }</title>


      <div className="flex flex-row justify-between mb-3 items-center border-b-2">
        <h1 className="text-4xl font-extrabold">Simeon's blogfolio</h1>

        <div className="flex flex-row">
            <NavItem route="/"          linkText="Home"/>
            <NavItem route="/all-posts" linkText="Blog"/>
        </div>
      </div>


      <h2 className="text-3xl font-bold font-medium text-green-600">{ pageTitle }</h2>
      { children }
    </main>
  )
}

export default Frame
