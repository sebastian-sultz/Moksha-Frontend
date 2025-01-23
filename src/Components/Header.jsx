import React from 'react'
import HeaderTop from './HeaderTop'
import HeaderBottom from './HeaderBottom'

function Header() {
  return (
    <div className="bg-bgcolor text-gray-700">

    {/* Header */}
    <div>
      <HeaderTop />
      <HeaderBottom />
    </div>
    </div>
  )
}

export default Header