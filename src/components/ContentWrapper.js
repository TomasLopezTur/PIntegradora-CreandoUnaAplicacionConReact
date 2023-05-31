import React from "react";
import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';
import Footer from './Footer';


export const ContentWrapper = () => {
	return (
		<div >
			<div id="content">
				<TopBar/>
				<ContentRowTop/>
			</div>
			<Footer/>
		</div>
	)
}


export default ContentWrapper;