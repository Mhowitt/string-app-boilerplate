import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { CREATE_STRING } from './reducer';
import FormControl from '../../components/FormControl';

const CardComponent = styled.div`
  background: rgba(255, 255, 255, 0.5);
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
      <CardComponent>
        <h1>
          <FormattedMessage {...this.props.headerText} />
        </h1>
        <div style={{ margin: '0 auto' }}>
          <FormattedMessage {...this.props.titleText} />
        </div>
        <div>
          <div>
            <FormControl
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
  headerText: PropTypes.object,
  titleText: PropTypes.object,
  openCloseModal: PropTypes.func,
};
