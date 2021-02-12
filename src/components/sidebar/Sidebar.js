import "./Sidebar.css"

const Sidebar = ({sidebarOpen, closeSidebar}) => {
    return (        
        <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
            <div className="sidebar__menu">
                <div className="sidebar__menu_right">
                    <div className="sidebar__link active_menu_link"> 
                        <i className="fa fa-home"></i>
                        <a href="#">DashBoard</a>
                    </div>               
                    <div className="sidebar__link">
                        <i className="fa fa-arrow-up"></i>
                        <a href="#">Companies</a>
                    </div>
                    <div className="sidebar__link">
                        <i className="fa fa-wrench"></i>
                        <a href="#">Projects</a>
                    </div>
                    <div className="sidebar__link">
                        <i className="fa fa-comment-lines"></i>
                        <a href="#">Messages</a>
                    </div> 
                </div> 
                <div className="sidebar__menu_left">
                    <div className="sidebar__link">
                    <i className="fa fa-power-off"></i>
                    <a href="#">Settings</a>
                </div>
                </div>      
                
            </div>
        </div>
    )
}

export default Sidebar;
           