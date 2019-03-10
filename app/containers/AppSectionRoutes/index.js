import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loader from '../../components/Loader.jsx';
import Notfound from '../NotFound';

/**
 * Importing ViewCategory component on demand
 */
const ViewCategory = Loadable({
  loader: () => new Promise(resolve => {
    import('../ViewCategory/index').then(res => resolve(res.default));
  }),
  loading: Loader
});

/**
 * Importing ViewExpense component on demand
 */
const ViewExpense = Loadable({
  loader: () => new Promise(resolve => {
    import('../ViewExpense/index').then(res => resolve(res.default));
  }),
  loading: Loader
});

class AppSectionRoutes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sensorId: this.props.sensorId
    };
  }

  static getDerivedStateFromProps(nextProps) {
    return {
      sensorId: nextProps.sensorId

    };
  }

  render() {
    return (
      <section className="appArea">
        <div className="container-fluid pb-3">
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Redirect to="/view-sensor-data" />
              )}
            />
            <Route
              exact
              path="/view-data-feed"
              render={props => (<ViewCategory {...props} />)}
            />
            <Route
              exact
              path="/view-sensor-data"
              render={props => (<ViewExpense {...props} {...this.state} />)}
            />
            <Route component={Notfound} />
          </Switch>
        </div>
      </section>
    );
  }
}

AppSectionRoutes.propTypes = {
  history: PropTypes.object.isRequired,
  getActiveSensor: PropTypes.func.isRequired,
  sensorId: PropTypes.string
};

AppSectionRoutes.defaultProps = {
  sensorId: ''
};

export default AppSectionRoutes;
