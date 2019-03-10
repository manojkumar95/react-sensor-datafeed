import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CategoryAction from '../../actions/category';

import Table from '../../components/Table';

import '../../../assets/styles/containers/ViewCategory.scss';

class ViewCategory extends React.Component {
  componentDidMount() {
    const { history } = this.props;
    if (history.location && history.location.state) {
      this.props.getCategories(history.location.state.id);
    }
  }

  render() {
    const { categories } = this.props;
    return (
      <div className="category-container">
        <div>
          <div className="row m-t-b-25">
            <div className="col-md-12 col-12">
              <span className="category-title">
                Data Feed Based On Info Id
              </span>
            </div>
          </div>
          <div className="row m-t-10 p-l-15">
            <div className="col-lg-12">
              <Table
                categories={categories}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ViewCategory.propTypes = {
  getCategories: PropTypes.func.isRequired,
  categories: PropTypes.array,
  history: PropTypes.object.isRequired
};

ViewCategory.defaultProps = {
  categories: []
};

const mapStateToProps = state => ({
  categories: Array.from(state.category.get('categoriesList') || []),
  loading: state.category.get('loading'),
  user: state.user.get('sensorId')
});

const mapDispatchToProps = dispatch => ({
  getCategories: dataId => dispatch(CategoryAction.getCategory(dataId)),
  createCategory: (data, cb) => dispatch(CategoryAction.createCategory(data, cb))
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewCategory);
