import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from './components/Footer';

import Header from './components/header';

class App extends Component {
	render() {
		return (
			<Fragment>
				<Header />
				<main>
				<Container>
					<Row>
						<Col>
					<h1>app</h1></Col>
					</Row>
				</Container>
				</main>
				<Footer />
			</Fragment>
		);
	}
}

export default App;
