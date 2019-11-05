import React from "react";
import "antd/dist/antd.css";
import { Row, Col, Card } from "antd";
import "./index.less";

import {NotificationCard} from "@/components/Cards";

class DashboardGrid extends React.Component {
	state = {
        cardDetails: [
            {title: "Alert Notifcation", color: "red"},
            {title: "Warning Notifcation", color: "yellow"},
            {title: "Control Notifcation", color: "green"},
            {title: "Info Notifcation", color: "blue"},
        ]
	};

	render() {
		const {cardDetails} = this.state;

		return (
			<div>
				<Row gutter={[20, 600]}>
					{cardDetails.map((detail) => {
						return (
							<Col span={6}>
								<div>
									<NotificationCard detail={detail}/>
								</div>
							</Col>
						);
					})}
				</Row>
				<Row gutter={30}>
					<Col span={8}>
						<div>World Future Indices</div>
					</Col>
					<Col span={8}>
						<div>World Indices Last Chg (%)</div>
					</Col>
					<Col span={8}>
						<div>US Govt Bonds YLD% </div>
					</Col>
				</Row>
			</div>
		);
	}
}

export default DashboardGrid;
