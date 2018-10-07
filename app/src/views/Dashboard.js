import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Loader from '../components/Loader';
import FeaturedItems from '../components/FeaturedItems';
import RecentEpisodesPanel from '../components/PodcastPanels/RecentEpisodesPanel';
import RecentArticlesPanel from '../components/RSSPanels/RecentArticlesPanel';
import PodcastList from '../components/PodcastPanels/PodcastList';
import RssFeedList from '../components/RSSPanels/RssFeedList';

class Dashboard extends React.Component {
	render() {
		if (this.props.loading) return <Loader />;

		return (
			<div className="dashboard">
				<FeaturedItems />
				<Link className="column-header podcast-header" to="/podcasts">
					<h1>Podcasts</h1>
					<div className="drilldown">
						<div>View all</div>
						<i className="fa fa-chevron-right" />
					</div>
				</Link>
				<div className="podcasts-section">
					<div className="column-content">
						<RecentEpisodesPanel />
						<PodcastList />
					</div>
				</div>
				<Link className="column-header rss-header" to="/rss">
					<h1>RSS</h1>
					<div className="drilldown">
						<div>View all</div>
						<i className="fa fa-chevron-right" />
					</div>
				</Link>
				<div className="rss-section">
					<div className="column-content">
						<RecentArticlesPanel />
						<RssFeedList />
					</div>
				</div>
				<Link className="column-header folder-header" to="/folders">
					<h1>Folders</h1>
					<div className="drilldown">
						<div>View all</div>
						<i className="fa fa-chevron-right" />
					</div>
				</Link>
				<div className="folder-section ">
					<div className="column-content">HERE FOLDERS </div>
				</div>
				<div className="border1" />
				<div className="border2" />
			</div>
		);
	}
}

Dashboard.defaultProps = {
	loading: true,
};

Dashboard.propTypes = {
	loading: PropTypes.bool,
	dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	loading: !state.user,
});

export default connect(mapStateToProps)(Dashboard);
