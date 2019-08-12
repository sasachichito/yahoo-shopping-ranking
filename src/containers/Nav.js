import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Nav from '../components/Nav';
import * as actions from '../actions/Nav';

const mapStateToProps = state => ({
    categories: state.shopping.categories
})

const mapDispatchToProps = dispatch => ({
    onClick (path) {
        dispatch(push(path));
    },
    fetchCategories () {
        dispatch(actions.fetchCategories());
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav);