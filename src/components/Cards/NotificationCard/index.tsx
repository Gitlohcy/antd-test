import React from "react";
import "antd/dist/antd.css";
import { Card } from "antd";
import "./index.less";

import CardCover from "./CardCover";

interface Props {
    detail: Detail;
}

interface Detail {
    title: string;
    color: string;
}

const { Meta } = Card;

class NotificationCard extends React.Component<Props> {
	render() {
        const { title, color} = this.props.detail

		return (
			<div className="card-cointainer">
				<Card
					className="card"
					bordered={false}
					cover={<CardCover title={title} color={color}/>}
					style={{
						borderRadius: "10px",
                        boxShadow: "rgba(100, 100, 100, 0.2) 1px 1px 4px 3px",
					}}
				>
					<Meta description="Card Content" />
				</Card>
			</div>
		);
	}
}

export default NotificationCard;
