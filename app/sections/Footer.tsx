import React from 'react'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p className='font-mono'>&copy; {new Date().getFullYear()} Pixel Pulse. All rights reserved.</p>
                <p className='font-serif'>Developed  |  Dew_Mindhi</p>
            </div>
        </footer>
    )
}

export default Footer
