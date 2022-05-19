/* eslint-disable */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Routing from './routes/routes.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import track from "react-tracking";
import axios from 'axios';
import TopNav from './components/common/TopNav.js';


function App() {
	const user = localStorage.getItem("user")
	const role = localStorage.getItem("role")
	const dep = localStorage.getItem("dep")

	return (
		<Container fluid>
			<Row>
				<Col className="p-0">
					<TopNav user={user} role={role} />
					<Routing user={user} role={role} />
				</Col>
			</Row>
		</Container>
	);
}

const TrackedApp = track(
	{ app: "tracking-app" },

	{
		dispatch: async (data) => {
			console.log(data);
			const res = await axios.post("http://localhost:5000/api/v1/history/", data);
			console.log(res.data)
		}
	}
)(App);

export default TrackedApp;