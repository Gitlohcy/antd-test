import React from "react";
import "antd/dist/antd.css";
import { Row, Col } from "antd";
import './index.less'

class DashboardGrid extends React.Component {
	render() {
		return (
			<div>
				<Row gutter={[20, 200]}>
					<Col span={6}><div>Alert</div></Col>
					<Col span={6}><div>Warning</div></Col>
					<Col span={6}><div>Control</div></Col>
					<Col span={6}><div>Info</div></Col>
				</Row>
				<Row gutter={30}>
					<Col span={8}><div>World Future Indices</div></Col>
					<Col span={8}><div>World Indices Last Chg (%)</div></Col>
					<Col span={8}><div>US Govt Bonds YLD% </div></Col>
				</Row>
			</div>
		);
	}
}

export default DashboardGrid
