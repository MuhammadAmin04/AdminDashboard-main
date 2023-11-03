import React from "react";
import {  Breadcrumb } from "antd";
import "./style.scss";
import { Link } from "react-router-dom";

const index = () => {
  return (
		<div className="main">
			<div className="bread">
				<Breadcrumb
					items={[
						{
							title: (
								<Link to="/dashboard" className="text-[#000]  ">
									Bosh sahifa
								</Link>
							),
						},
						{
							title: (
								<Link to="/dashboard/buyurtmachilar" className="text-[#000] ">
									Buyurtmachilar
								</Link>
							),
						},
					]}
				/>
			</div>
		</div>
	);
};

export default index;
