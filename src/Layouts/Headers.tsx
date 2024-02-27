

const Headers = () => {
  return (
    <div>
        <header id="page-topbar">
            <div className="navbar-header">
                <div className="d-flex">
                   <div className="navbar-brand-box">
                    <a href="index.html" className="logo logo-dark">
                        <span className="logo-sm">
                            <img src="assets/images/logo-sm.svg" alt="" height="26" />
                        </span>
                        <span className="logo-lg">
                            <img src="assets/images/logo-sm.svg" alt="" height="26" /> <span className="logo-txt">Vusey</span>
                        </span>
                    </a>

                    <a href="index.html" className="logo logo-light">
                        <span className="logo-sm">
                            <img src="assets/images/logo-sm.svg" alt="" height="26" />
                        </span>
                        <span className="logo-lg">
                            <img src="assets/images/logo-sm.svg" alt="" height="26" /> <span className="logo-txt">Vusey</span>
                        </span>
                    </a>

                </div>

                    <button type="button" className="btn btn-sm px-3 header-item vertical-menu-btn noti-icon">
                        <i className="fa fa-fw fa-bars font-size-16"></i>
                    </button>

                    <form className="app-search d-none d-lg-block">
                        <div className="position-relative">
                            <input type="text" className="form-control" placeholder="Search..." />
                            <span className="bx bx-search icon-sm"></span>
                        </div>
                    </form>

         
                </div>

                <div className="d-flex">
                    <div className="dropdown d-inline-block d-block d-lg-none">
                        <button type="button" className="btn header-item noti-icon"
                            data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="bx bx-search icon-sm"></i>
                        </button>
                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0">
                            <form className="p-2">
                                <div className="search-box">
                                    <div className="position-relative">
                                        <input type="text" className="form-control rounded bg-light border-0" placeholder="Search..." />
                                        <i className="bx bx-search search-icon"></i>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                   <div className="dropdown d-inline-block language-switch">
                        <button type="button" className="btn header-item noti-icon"
                            data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img id="header-lang-img" src="assets/images/flags/us.jpg" alt="Header Language" height="16" />
                        </button>
                        <div className="dropdown-menu dropdown-menu-end">
                    
                            <a href="javascript:void(0);" className="dropdown-item notify-item language" data-lang="eng">
                                <img src="assets/images/flags/us.jpg" alt="user-image" className="me-2" height="12" /> <span className="align-middle">English</span>
                            </a>
                            <a href="javascript:void(0);" className="dropdown-item notify-item language" data-lang="sp">
                                <img src="assets/images/flags/spain.jpg" alt="user-image" className="me-2" height="12" /> <span className="align-middle">Spanish</span>
                            </a>

                            <a href="javascript:void(0);" className="dropdown-item notify-item language" data-lang="gr">
                                <img src="assets/images/flags/germany.jpg" alt="user-image" className="me-2" height="12" /> <span className="align-middle">German</span>
                            </a>

                            <a href="javascript:void(0);" className="dropdown-item notify-item language" data-lang="it">
                                <img src="assets/images/flags/italy.jpg" alt="user-image" className="me-2" height="12" /> <span className="align-middle">Italian</span>
                            </a>

                            <a href="javascript:void(0);" className="dropdown-item notify-item language" data-lang="ru">
                                <img src="assets/images/flags/russia.jpg" alt="user-image" className="me-2" height="12" /> <span className="align-middle">Russian</span>
                            </a>
                        </div>
                    </div>

                    <div className="dropdown d-inline-block">
                        <button type="button" className="btn header-item noti-icon" id="page-header-notifications-dropdown"
                            data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="bx bx-bell icon-sm"></i>
                            <span className="noti-dot bg-danger rounded-pill">3</span>
                        </button>
                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                            aria-labelledby="page-header-notifications-dropdown">
                            <div className="p-3">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <h5 className="m-0 font-size-15"> Notifications </h5>
                                    </div>
                                    <div className="col-auto">
                                        <a href="javascript:void(0);" className="small"> Mark all as read</a>
                                    </div>
                                </div>
                            </div>
                            <div data-simplebar style="max-height: 250px;">
                                <h6 className="dropdown-header bg-light">New</h6>
                                <a href="" className="text-reset notification-item">
                                    <div className="d-flex border-bottom align-items-start">
                                        <div className="flex-shrink-0">
                                            <img src="assets/images/users/avatar-3.jpg"
                                            className="me-3 rounded-circle avatar-sm" alt="user-pic" />
                                        </div>
                                        <div className="flex-grow-1">
                                            <h6 className="mb-1">Justin Verduzco</h6>
                                            <div className="text-muted">
                                                <p className="mb-1 font-size-13">Your task changed an issue from "In Progress" to <span className="badge badge-soft-success">Review</span></p>
                                                <p className="mb-0 font-size-10 text-uppercase fw-bold"><i className="mdi mdi-clock-outline"></i> 1 hours ago</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a href="" className="text-reset notification-item">
                                    <div className="d-flex border-bottom align-items-start">
                                        <div className="flex-shrink-0">
                                            <div className="avatar-sm me-3">
                                                <span className="avatar-title bg-primary rounded-circle font-size-16">
                                                    <i className="uil-shopping-basket"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1">
                                            <h6 className="mb-1">New order has been placed</h6>
                                            <div className="text-muted">
                                                <p className="mb-1 font-size-13">Open the order confirmation or shipment confirmation.</p>
                                                <p className="mb-0 font-size-10 text-uppercase fw-bold"><i className="mdi mdi-clock-outline"></i> 5 hours ago</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <h6 className="dropdown-header bg-light">Earlier</h6>
                                <a href="" className="text-reset notification-item">
                                    <div className="d-flex border-bottom align-items-start">
                                        <div className="flex-shrink-0">
                                            <div className="avatar-sm me-3">
                                                <span className="avatar-title bg-soft-success text-success rounded-circle font-size-16">
                                                    <i className="uil-truck"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1">
                                            <h6 className="mb-1">Your item is shipped</h6>
                                            <div className="text-muted">
                                                <p className="mb-1 font-size-13">Here is somthing that you might light like to know.</p>
                                                <p className="mb-0 font-size-10 text-uppercase fw-bold"><i className="mdi mdi-clock-outline"></i> 1 day ago</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                                <a href="" className="text-reset notification-item">
                                    <div className="d-flex border-bottom align-items-start">
                                        <div className="flex-shrink-0">
                                            <img src="assets/images/users/avatar-4.jpg"
                                                className="me-3 rounded-circle avatar-sm" alt="user-pic" />
                                        </div>
                                        <div className="flex-grow-1">
                                            <h6 className="mb-1">Salena Layfield</h6>
                                            <div className="text-muted">
                                                <p className="mb-1 font-size-13">Yay ! Everything worked!</p>
                                                <p className="mb-0 font-size-10 text-uppercase fw-bold"><i className="mdi mdi-clock-outline"></i> 3 days ago</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="p-2 border-top d-grid">
                                <a className="btn btn-sm btn-link font-size-14 btn-block text-center" href="javascript:void(0)">
                                    <i className="uil-arrow-circle-right me-1"></i> <span>View More..</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="dropdown d-inline-block">
                        <button type="button" className="btn header-item noti-icon right-bar-toggle" id="right-bar-toggle">
                            <i className="bx bx-cog icon-sm"></i>
                        </button>
                    </div>

                    <div className="dropdown d-inline-block">
                        <button type="button" className="btn header-item user text-start d-flex align-items-center" id="page-header-user-dropdown"
                            data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img className="rounded-circle header-profile-user" src="assets/images/users/avatar-3.jpg"
                            alt="Header Avatar" />
                            <span className="ms-2 d-none d-xl-inline-block user-item-desc">
                                <span className="user-name">Marie N. <i className="mdi mdi-chevron-down"></i></span>
                            </span>
                        </button>
                        <div className="dropdown-menu dropdown-menu-end pt-0">
                            <h6 className="dropdown-header">Welcome Marie N!</h6>
                            <a className="dropdown-item" href="pages-profile.html"><i className="mdi mdi-account-circle text-muted font-size-16 align-middle me-1"></i> <span className="align-middle">Profile</span></a>
                            <a className="dropdown-item" href="apps-chat.html"><i className="mdi mdi-message-text-outline text-muted font-size-16 align-middle me-1"></i> <span className="align-middle">Messages</span></a>
                            <a className="dropdown-item" href="apps-kanban-board.html"><i className="mdi mdi-calendar-check-outline text-muted font-size-16 align-middle me-1"></i> <span className="align-middle">Taskboard</span></a>
                            <a className="dropdown-item" href="pages-faqs.html"><i className="mdi mdi-lifebuoy text-muted font-size-16 align-middle me-1"></i> <span className="align-middle">Help</span></a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#"><i className="mdi mdi-wallet text-muted font-size-16 align-middle me-1"></i> <span className="align-middle">Balance : <b>$6951.02</b></span></a>
                            <a className="dropdown-item d-flex align-items-center" href="contacts-settings.html"><i className="mdi mdi-cog-outline text-muted font-size-16 align-middle me-1"></i> <span className="align-middle">Settings</span><span className="badge badge-soft-success ms-auto">New</span></a>
                            <a className="dropdown-item" href="auth-lockscreen-cover.html"><i className="mdi mdi-lock text-muted font-size-16 align-middle me-1"></i> <span className="align-middle">Lock screen</span></a>
                            <a className="dropdown-item" href="auth-signout-cover.html"><i className="mdi mdi-logout text-muted font-size-16 align-middle me-1"></i> <span className="align-middle">Logout</span></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="collapse show verti-dash-content" id="dashtoggle">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="page-title-box d-flex align-items-center justify-content-between">
                                <h4 className="mb-0">Vertical</h4>

                                <div className="page-title-right">
                                    <ol className="breadcrumb m-0">
                                        <li className="breadcrumb-item"><a href="javascript: void(0);">layouts</a></li>
                                        <li className="breadcrumb-item active">Vertical</li>
                                    </ol>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-12">
                            <div className="card dash-header-box shadow-none border-0">
                                <div className="card-body p-0">
                                    <div className="row row-cols-xxl-6 row-cols-md-3 row-cols-1 g-0">
                                        <div className="col">
                                            <div className="mt-md-0 py-3 px-4 mx-2">
                                                <p className="text-white-50 mb-2 text-truncate">Campaign Sent </p>
                                                <h3 className="text-white mb-0">197</h3>
                                            </div>
                                        </div>

                                        <div className="col">
                                            <div className="mt-3 mt-md-0 py-3 px-4 mx-2">
                                                <p className="text-white-50 mb-2 text-truncate">Annual Profit</p>
                                                <h3 className="text-white mb-0">$489.4k</h3>
                                            </div>
                                        </div>

                                        <div className="col">
                                            <div className="mt-3 mt-md-0 py-3 px-4 mx-2">
                                                <p className="text-white-50 mb-2 text-truncate">Lead Coversation</p>
                                                <h3 className="text-white mb-0">32.89%</h3>
                                            </div>
                                        </div>

                                        <div className="col">
                                            <div className="mt-3 mt-md-0 py-3 px-4 mx-2">
                                                <p className="text-white-50 mb-2 text-truncate">Sales Forecast</p>
                                                <h3 className="text-white mb-0">75.35%</h3>
                                            </div>
                                        </div>

                                        <div className="col">
                                            <div className="mt-3 mt-lg-0 py-3 px-4 mx-2">
                                                <p className="text-white-50 mb-2 text-truncate">Daily Average Income</p>
                                                <h3 className="text-white mb-0">$1,596.5</h3>
                                            </div>
                                        </div>

                                        <div className="col">
                                            <div className="mt-3 mt-lg-0 py-3 px-4 mx-2">
                                                <p className="text-white-50 mb-2 text-truncate">Annual Deals</p>
                                                <h3 className="text-white mb-0">2,659</h3>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

              <div>
                <a className="dash-troggle-icon" id="dash-troggle-icon" data-bs-toggle="collapse" href="#dashtoggle" aria-expanded="true" aria-controls="dashtoggle">
                    <i className="bx bx-up-arrow-alt"></i>
                </a>
            </div>

    
        </header>
    </div>
  )
}

export default Headers