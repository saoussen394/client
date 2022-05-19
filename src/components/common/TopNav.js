/* eslint-disable */
import React from 'react'
import image from './logo.png'


function TopNav(props) {
	const { user, role } = props
	const logout = () => {
		localStorage.removeItem('user')
		localStorage.removeItem('role')
		window.location.reload();
	}
	return (

		<div>
			<nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
				<img src={image} height="90px" widht="30px" />
				<a class="navbar-brand" href="/Home"><span>FCAP</span> </a>

				<div class="container">
					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
						<span class="fa fa-bars"></span> Menu
					</button>
					<div class="collapse navbar-collapse" id="ftco-nav">
						<ul class="navbar-nav ml-auto">
							{user ? <>

								<li class="nav-item" style={{ marginright: "15px", marginleft: "15px", }}><a href="/Home" class="nav-link">Home</a></li>
								<li class="nav-item" style={{ marginright: "15px", marginleft: "15px", }}><a href="/Notes" class="nav-link">Notes</a></li>
								<li class="nav-item" style={{ marginright: "15px", marginleft: "15px", }}><a href="/Todo" class="nav-link">Todo</a></li>



							</> : null}
							{user && role == "ADMIN" ?
								<>
									<li class="nav-item" style={{ marginright: "15px", marginleft: "15px", }} ><a href="/DashboardAdmin" class="nav-link">Dashboard</a></li>
									<li class="nav-item" style={{ marginright: "15px", marginleft: "15px", }}><a href="/History" class="nav-link">History</a></li>
									<li class="nav-item" style={{ marginright: "15px", marginleft: "15px", }}><a href="/TaskDetails" class="nav-link">Task</a></li>
									<li class="nav-item" style={{ marginright: "15px", marginleft: "15px", }}><a href="/EmployeeDetails" class="nav-link">Employee</a></li>
									<li class="nav-item" style={{ marginright: "15px", marginleft: "15px", }}><a href="/idea" class="nav-link">Idea</a></li>
									<li class="nav-item" style={{ marginright: "15px", marginleft: "15px", }}><a href="/Daily" class="nav-link">Daily</a></li>
									<li class="nav-item" style={{ marginright: "15px", marginleft: "15px", }}><a href="/employeeArchive" class="nav-link">employeeArchive</a></li>
									<li class="nav-item" style={{ marginright: "15px", marginleft: "15px", }}><a href="/Taskarchive" class="nav-link">Taskarchive</a></li>
								</>
								: null
							}
							{user && role == "CUSTOMER_SERVISES" ?
								<>
									<li class="nav-item"><a href="/DashboardCs" class="nav-link">Dashboard</a></li>
									<li class="nav-item"><a href="/MessageTemplate" class="nav-link">MessageTemplate</a></li>
								</>
								:
								null}
							{user && role == "ACCOUNTING" ?
								<>
									<li class="nav-item"><a href="/DashboardAc" class="nav-link">Dashboard</a></li>
									<li class="nav-item"><a href="/Facture" class="nav-link">Facture</a></li>
									<li class="nav-item"><a href="/Stock" class="nav-link">Stock</a></li>
								</>
								: null}

							{user && role == "INFORMATION_TECHNOLOGIES" ?

								<li class="nav-item"><a href="/DashboardIt" class="nav-link">Dashboard</a></li>
								: null}
							{user && role == "MARKETING" ?
								<li class="nav-item"><a href="/DashboardMkt" class="nav-link">Dashboard</a></li>
								: null}
							{user && role == "TECHNICHAL_SERVICES" ?

								<li class="nav-item"><a href="/DashboardTech" class="nav-link">Dashboard</a></li>
								: null} </ul>
						{user ?

							<button class="logoutbtn" id="button-5" onClick={logout} style={{ marginLeft: "100px" }}><div id="translate"></div><a>Logout </a></button>
							:
							<a href='/login'><button class="logoutbtn" id="button-5" style={{ marginLeft: "100px" }}><div id="translate"></div><a>Login </a></button></a>

						}


					</div>
				</div></nav>    <section class="hero-wrap hero-wrap-2"  >
				<div class="overlay"></div>
			</section>

		</div>
	)
}

export default TopNav;