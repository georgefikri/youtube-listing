import './SubMenu.scss'

interface SubMenuProps {
    totalResult: number;
}

function SubMenu({ totalResult }: SubMenuProps) {
  return (
    <div className='subMenu'>
        <div className="subMenu__resultTotal">
            <p>About {totalResult} filtered results</p>
        </div>

        {/* filter */}
        <div className="subMenu__filter">
            <button className='subMenu__filterButton'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 13H5v-2h14v2zm-7 7h-2v-6h2v6zm7-14h-14v2h14v-2z"/></svg>
            </button>
            <p>Filter</p>
        </div>
    </div>
  )
}

export default SubMenu