import React from 'react'

const MenuContext = React.createContext({
    menu: 1,
    setMenu: () => {},
    data: [
        {
            id: 1,
            desc: "Test01"
        },
        {
            id: 2,
            desc: "Test02"
        },
        {
            id: 3,
            desc: "Test03"
        },
    ],
    setData: () => {},
});

export default MenuContext