import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { createSelector } from 'reselect';

// import { CREATE_STRING } from './constants';
// import { formStrValue } from './selectors';
import * as actions from './actions';

import FormControl from '../../components/FormControl';

const CardComponent = styled.div`
  background: ${props =>
    props.modal ? '#ff4625' : 'rgba(255, 255, 255, 0.5)'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #070214;
  padding: 100px;
`;

class CreateString extends React.PureComponent {
  render() {
    return (
      <CardComponent {...this.props}>
        <h1>
          <FormattedMessage {...this.props.headerText} />
        </h1>
        <div style={{ margin: '0 auto' }}>
          <FormattedMessage {...this.props.titleText} />
        </div>
        <div>
          <div>
            <FormControl
              // formValue={this.props.formValue}
              // changeValue={this.props.changeValue}
              createString={this.props.createString}
              isModalOpen={this.props.isModalOpen}
              openCloseModal={this.props.openCloseModal}
            />
          </div>
        </div>
      </CardComponent>
    );
  }
}
// const mapStateToProps = createSelector(formStrValue(), formValue => ({
//   formValue,
// }));

const mapDispatchToProps = {
  createString: string => actions.createString(string),
  // changeValue: str => actions.changeFormValue(str),
};

export default connect(
  null,
  mapDispatchToProps,
)(CreateString);

CreateString.propTypes = {
  createString: PropTypes.func,
  changeValue: PropTypes.func,
  modal: PropTypes.bool,
  headerText: PropTypes.object,
  titleText: PropTypes.object,
  formValue: PropTypes.func,
  openCloseModal: PropTypes.func,
};
