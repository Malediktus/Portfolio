import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const Navigation = () => {
	return (
		<div>
			<Navbar
				fixed="top"
				bg="light"
				expand="lg"
				style={{
					background:
						"linear-gradient(180deg, #26AD64 0%, #26AD64 0.01%, #0D3D23 100%)",
				}}
			>
				<Container>
					<Navbar.Brand href="#home">
						<img
							src="/logo.png"
							width="30"
							height="30"
							className="d-inline-block align-top"
							alt=""
							style={{
								position: "absolute",
								left: "20px",
								top: "15px",
							}}
						/>
					</Navbar.Brand>
					<Navbar.Brand href="#home" style={{ position: "absolute", color: "#FFFFFF", left: "150px" }}>
						Nico Grundei
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav
							className="d-flex flex-row-reverse"
							style={{ marginLeft: "auto" }}
						>
							<Nav.Link href="#home" style={{ color: "#FFFFFF" }}>
								Home
							</Nav.Link>
							<Nav.Link
								href="#repos"
								style={{ color: "#FFFFFF" }}
							>
								Projects
							</Nav.Link>
							<Nav.Link href="#link" style={{ color: "#FFFFFF" }}>
								Link
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
				<div
					style={{
						position: "absolute",
						width: "100%",
						height: "0px",
						left: "0px",
						top: "56px",
						border: "4px solid #8F8F8F",
						backgroundColor: "#8F8F8F",
					}}
				></div>

				<div
					style={{
						position: "absolute",
						width: "1499px",
						height: "0px",
						left: "-650px",
						top: "-50px",
						border: "4px solid #8F8F8F",
						backgroundColor: "#8F8F8F",
						transform: "rotate(-90deg)",
					}}
				></div>

				<div
					style={{
						position: "absolute",
						width: "1499px",
						height: "0px",
						left: "-650px",
						top: "1750px",
						border: "4px solid #8F8F8F",
						backgroundColor: "#8F8F8F",
						transform: "rotate(-90deg)",
					}}
				></div>

				<img
					src="/no-image.png"
					width="50"
					height="50"
					className="d-inline-block align-top"
					alt=""
					style={{
						position: "absolute",
						left: "20px",
						top: "150px",
					}}
				/>

				<img
					src="/no-image.png"
					width="50"
					height="50"
					className="d-inline-block align-top"
					alt=""
					style={{
						position: "absolute",
						left: "20px",
						top: "250px",
					}}
				/>

				<img
					src="/no-image.png"
					width="50"
					height="50"
					className="d-inline-block align-top"
					alt=""
					style={{
						position: "absolute",
						left: "20px",
						top: "350px",
					}}
				/>

				<img
					src="/github-logo.png"
					width="80"
					height="50"
					className="d-inline-block align-top"
					alt=""
					style={{
						position: "absolute",
						left: "62px",
						top: "1300%",
					}}
				/>

				<img
					src="/github-logo.png"
					width="80"
					height="50"
					className="d-inline-block align-top"
					alt=""
					style={{
						position: "absolute",
						left: "62px",
						top: "1430%",
					}}
				/>

				<img
					src="/github-logo.png"
					width="80"
					height="50"
					className="d-inline-block align-top"
					alt=""
					style={{
						position: "absolute",
						left: "62px",
						top: "1560%",
					}}
				/>

				<img
					src="/github-logo.png"
					width="80"
					height="50"
					className="d-inline-block align-top"
					alt=""
					style={{
						position: "absolute",
						left: "62px",
						top: "1690%",
					}}
				/>
			</Navbar>
		</div>
	);
};

export default Navigation;
