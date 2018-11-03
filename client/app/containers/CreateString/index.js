import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CREATE_STRING } from './constants';
import FormControl from '../../components/FormControl';

class CreateString extends React.PureComponent {
  render() {
    return (
      <div>
        <div>Give us a string</div>
        <div>
          <FormControl createString={this.props.createString} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isCreateModalOpen: state.isCreateModalOpen,
});

const mapDispatchToProps = {
  createString: string => ({
    type: CREATE_STRING,
    payload: string,
  }),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateString);

CreateString.propTypes = {
  createString: PropTypes.func,
};
