import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ExpenseAction from '../../actions/expense';
import UserAction from '../../actions/user';

import ExpenseChart from '../../components/ExpenseChart';
import '../../../assets/styles/containers/ViewExpense.scss';

class ViewExpense extends React.Component {
  componentDidMount() {
    const { user } = this.props;
    if (user) {
      this.props.getLatestSensorDatafeed(user);
    }
    setInterval(this.triggerNewDataFeed, 5000);
  }

  triggerNewDataFeed = () => {
    this.props.getActiveSensor(response => {
      this.props.getLatestSensorDatafeed(response.sensorId);
    });
  }

  handleDataClick = data => {
    this.props.history.push('/view-data-feed');
    this.props.history.push({
      pathname: '/view-data-feed',
      state: { id: data.payload.SensorId }
    });
  }

  render() {
    const { expenses } = this.props;
    return (
      <Fragment>
        <div className="expense-container">
          <div className="row m-t-b-25">
            <div className="col-md-12 col-12">
              <span className="expense-title">
                Streaming Sensor Datafeed Representation
              </span>
            </div>
          </div>
          <div className="row m-t-10 p-l-15">
            <div className="col-lg-12">
              <div className="table-container filter-container">
                <ExpenseChart
                  expenses={expenses}
                  handleDataClick={this.handleDataClick}
                />
              </div>

            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

ViewExpense.propTypes = {
  getLatestSensorDatafeed: PropTypes.func.isRequired,
  getActiveSensor: PropTypes.func.isRequired,
  user: PropTypes.string.isRequired,
  expenses: PropTypes.object,
  history: PropTypes.object.isRequired
};

ViewExpense.defaultProps = {
  expenses: {}
};

const mapStateToProps = state => ({
  expenses: Array.from(state.expense.get('expensesList') || []),
  loading: state.expense.get('loading'),
  user: state.user.get('sensorId')
});

const mapDispatchToProps = dispatch => ({
  getActiveSensor: cb => dispatch(UserAction.getActiveSensor(cb)),
  getLatestSensorDatafeed: sensorId => dispatch(ExpenseAction.getLatestSensorDatafeed(sensorId)),
  getExpensesByFilters: filters => dispatch(ExpenseAction.getExpensesByFilters(filters))
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewExpense);
