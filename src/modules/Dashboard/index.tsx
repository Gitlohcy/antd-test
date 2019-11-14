import React from "react";
import "antd/dist/antd.css";
import { Layout, Icon, notification } from "antd";

import { FixedSider } from '@/components/SideMenu'
import { DashboardGrid } from '@/components/ContentGrid'

//--- 
import { connect } from 'react-redux';
import { IRootState } from '@/infrastructure/rootState';
import { notSelectors, notActions } from '@/features';

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const { Header, Content, Footer, Sider } = Layout;

class Dashboard extends React.PureComponent<Props> {
    
    componentDidUpdate(){
        console.log('props',this.props)
    }

    render() {
        console.log('props2',this.props)
		return (
            
			<Layout style={{ minHeight: "100vh" }}>
                <FixedSider></FixedSider>
				<Layout style={{minHeight: "100vh"}}>
					<Header
						style={{
							background: "#EEEEEE",
							padding: "0 24px",
                            margin: "0 16px",
                            marginBottom: "10px",
                            minHeight: "10vh"
						}}
					>
						DashBoards
					</Header>
					<Content style={{ margin: "0 16px" }}>
						<div
							style={{
								padding: 24,
								background: "#EEEEEE",
								minHeight: "90vh"
							}}
						>
                            <DashboardGrid />
						</div>
					</Content>
				</Layout>
			</Layout>
		);
	}
}

const mapStateToProps = (s: IRootState) => ({
    notification: notSelectors.notification(s),
    placeholder: notSelectors.placeholder(s),
    isDataFetching_placeholder: notSelectors.isDataFetching_placeholder(s),
    isDataFetching_notification: notSelectors.isDataFetching_notification(s)
});

const  mapDispatchToProps = () => ({
    fetchNotificationAsync: notActions.fetchNotificationAsync.request,
    fetchPlaceholderAsync: notActions.fetchPlaceholderAsync.request
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Dashboard);