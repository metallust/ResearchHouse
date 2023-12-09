import React, { useContext } from 'react'
import ThemeContext from '../Context/ThemeContext'

const Colors = () => {
    const { theme, changeTheme } = useContext(ThemeContext)
    return (
        <>
            <div>
                <h1 className='text-center'>
                    <button type='button' className='btn btn-secondary' onClick={changeTheme}>
                        Change
                    </button>
                    <></>
                    Color Palette : {theme.name}
                </h1>
                <div style={{ height: "200px", backgroundColor: theme.primary }}></div>
                <h3 className='text-center'>primary: "#1b2d48"</h3>
                <div style={{ height: "200px", backgroundColor: theme.secondary }}></div>
                <h3 className='text-center'>secondary: "#2c456b"</h3>
                <div style={{ height: "200px", backgroundColor: theme.tertiary }}></div>
                <h3 className='text-center'>tertiary: "#3c649f"</h3>
                <div style={{ height: "200px", backgroundColor: theme.quaternary }}></div>
                <h3 className='text-center'>quaternary:"#83aff0"</h3>
                <div style={{ height: "200px", backgroundColor: theme.black }}></div>
                <h3 className='text-center'>black : "#000000"</h3>
                <div style={{ height: "200px", backgroundColor: theme.white }}></div>
                <h3 className='text-center'>white : "#ffffff"</h3>
                <div style={{ height: "200px", backgroundColor: theme.btn }}></div>
                <h3 className='text-center'>btn : "#ff9900"</h3>
                <div style={{ height: "200px", backgroundColor: theme.btntext }}></div>
                <h3 className='text-center'>btntext: "#000000"</h3>
            </div>
        </>
    )
}

export default Colors
