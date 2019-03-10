import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import 'react-perfect-scrollbar/dist/css/styles.css';
import UserAction from '../../actions/user.js';
import AppHeader from '../../components/AppHeader';
import AppSectionRoutes from '../../containers/AppSectionRoutes';
import '../../../assets/styles/containers/Dashboard.scss';

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.getActiveSensor();
  }

  render() {
    const {
      sensorId, firstName, lastName
    } = this.props;
    return (
      <Fragment>
        <main className="app-mainArea">
          <AppHeader
            {...this.props}
            sensorId={sensorId}
            firstName={firstName}
            lastName={lastName}
          />
          <AppSectionRoutes
            {...this.props}
            sensorId={sensorId}
            firstName={firstName}
            lastName={lastName}
          />
        </main>
      </Fragment>
    );
  }
}

Dashboard.propTypes = {
  getActiveSensor: PropTypes.func.isRequired,
  sensorId: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string
};

Dashboard.defaultProps = {
  firstName: '',
  sensorId: '',
  lastName: ''
};

const mapStateToProps = state => ({
  sensorId: state.user.get('sensorId'),
  firstName: state.user.get('firstName'),
  lastName: state.user.get('lastName')
});

const mapDispatchToProps = dispatch => ({
  getActiveSensor: () => dispatch(UserAction.getActiveSensor())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

