import React from 'react'

const SmhriContext = React.createContext({
    showSidebar: false,
    showEmployeeDrop: false,
    showReportsDrop:false,
    activeTab:"dashboard",
    companyData: [],
    changeActiveTab: () => {},
    changeSidebar: () => {},
    changeEmployeeDrop: () => {},
    changeReportDrop: () => {},
})

export default SmhriContext