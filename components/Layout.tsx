import React from 'react'
import Sidebar from './Sidebar'

type layoutProp = {
    children: React.ReactNode
}

const Layout = ({ children }:layoutProp) => {
    return (
        <div className="grid grid-cols-12">
            <div className="col-span-4 md:col-span-3">
            <Sidebar/>
            </div>
            <div className="col-span-8 md:col-span-9">
            {children}
            </div>
        </div>
    )
}

export default Layout
