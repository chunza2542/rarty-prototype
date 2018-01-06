import React from 'react'
import styled from 'styled-components'

import HeaderContainer from '../containers/header'
import FooterContainer from '../containers/footer'
import ProductCard from '../components/ProductCard'

import Slide from '../components/Slide'

const Content = styled.div`
	width: 100%;
	height: 300px;
	background: #ccc;
	margin: 20px 0;
`

const Page = styled.div`
	position: relative;
	margin: auto auto;
	margin-top: 30px;
`

const Box = styled.div`
	display: inline-block;
	padding: 7px 15px;
	margin-left: 7px;
	cursor: pointer;
	border: 2px solid #111b36;
	background: ${props => (props.active) ? '#111b36' : 'white'};
	color: ${props => (props.active) ? 'white' : 'black'};

	&:hover {
		background: #111b36;
		color: white;
	}
`

const CatePage = () => (
	<div>
		<HeaderContainer />
		<div class="container">
			<Content />
			<div class="row">
				<div class="col-md-3">
					<Slide show={true} heading="male" content={[
						'Hellooo',
						'What the assdasd',
						'GG Awesome'
					]}/>
					<Slide heading="female" content={[
						'Hellooo',
						'What the assdasd',
						'GG Awesome'
					]}/>
					<hr />
					<b>Search Title</b>
					<input type="text" class="form-control" placeholder="Seach by name..." />
					<hr />
					<b>Price Range</b>
					<input type="number" class="form-control" value="200" placeholder="Start" />
					<center>to</center>
					<input type="number" class="form-control" value="5000" placeholder="To" />
					<br />
				</div>
				<div class="col-md-9">
					<div class="row">
						<div class="col-md-4">
							<ProductCard />
						</div>
						<div class="col-md-4">
							<ProductCard />
						</div>
						<div class="col-md-4">
							<ProductCard />
						</div>
						<div class="col-md-4">
							<ProductCard />
						</div>
						<div class="col-md-4">
							<ProductCard />
						</div>
						<div class="col-md-4">
							<ProductCard />
						</div>

						<Page>
							<Box active>1</Box>
							<Box>2</Box>
							<Box>3</Box>
							<Box>4</Box>
						</Page>
					</div>
				</div>
			</div>
		</div>

		<FooterContainer />
	</div>
)

export default CatePage