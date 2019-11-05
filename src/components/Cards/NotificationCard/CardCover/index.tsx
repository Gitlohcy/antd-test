import React, { FC } from "react";
import './index.less'
import {Icon} from 'antd'

interface Props {
    title: string;
    color: string;
}

const CardCover: React.FC<Props> = ({title,color}) => {
    console.log(color);
	return (
		<div
			className="cover"
			style={{ position: "relative", borderBottom: "solid grey 1px" }}
		>
			<div
				className={`cover--big-icon ${color}`}
				style={{
					padding: 15,
					
					borderRadius: 4,
                    position: "absolute",
                    top: -20,
                    left: 20,
				}}
			>
				<Icon type="bell" theme="outlined" style={{
                    fontSize: '26px',
                    padding: 20
                }}/>
			</div>
            
            <h3 className="card-title" 
                style={{
                    backgroundClip: "padding-box",
                    boxSizing: "border-box"}}
            >
                {title}
            </h3>
            <div className="card-content--counter">
                {/* <span style={{fontSize: '150%'}}>3</span> */}
                <span className="counter--num">3</span>
                <span > cases</span>
            </div>
		</div>
	);
};

export default CardCover;
