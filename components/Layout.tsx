import React from 'react'
import Sidebar from './Sidebar'

type layoutProp = {
    children: React.ReactNode
}

const Layout = ({ children }:layoutProp) => {
    return (
        <div className="md:grid md:grid-cols-12">
            <div className="hidden md:block  md:col-span-3">
            <Sidebar/>
            </div>
            <div className=" md:col-span-9">
                {children}
            </div>
        </div>
    )
}

export default Layout
