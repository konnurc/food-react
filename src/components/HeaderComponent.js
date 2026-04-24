import React from 'react'

const HeaderComponent = () => {
  return (
    <header className="header-container">
        <div className='container'>
            <div className='header-logo'>
                <a href='#'>
                    <img src='https://cdn.dribbble.com/userupload/22636569/file/original-6e345e102a5f8c975b24b3268bf5c22e.jpg?resize=752x&vertical=center' alt='Logo' />
                </a>
            </div>
            <div className='header-navitems-links'>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Cart</a></li>
                </ul>
            </div>
        </div>
    </header>
  )
}

export default HeaderComponent
