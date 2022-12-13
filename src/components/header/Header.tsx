import './Header.scss'

interface HeaderProps {
    searchKeyword: any;
    searchVideos: () => void;
    updateSearchKeyword: (e: any) => void;
    searchVideosCallback: (e: any) => void;
}

function Header({searchKeyword, searchVideos, updateSearchKeyword, searchVideosCallback}: HeaderProps) {

  return (
    <header className="header">
        <div className="header__logo">

            <picture>
                <source media="(min-width: 651px)" srcSet="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1200px-YouTube_Logo_2017.svg.png" />
                <source media="(max-width: 650px)" srcSet="https://cdn-icons-png.flaticon.com/512/160/160205.png" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/800px-YouTube_Logo_2017.svg.png" alt="youtube logo" />
            </picture>
            
        </div>
        <div className="header__search">
            <input type="text" 
                value={searchKeyword} 
                onChange={(e) => updateSearchKeyword(e)} 
                onKeyDown={(e) => searchVideosCallback(e)} 
            />
            <button className='header__searchButton' onClick={searchVideos}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
            </button>

        </div>

    </header>
    
  )
}

export default Header