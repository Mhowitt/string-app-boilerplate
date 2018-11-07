import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { LOAD_STRINGS } from './reducer';
import { selectStrings } from './selectors';
import messages from './messages';
import StringListItem from '../../components/StringListItem';
import Modal from '../../components/Modal';
import CreateString from '../CreateString';

class StringContainer extends React.Component {
  static propTypes = {
    getStrings: PropTypes.func,
    stringData: PropTypes.object,
    isModalOpen: PropTypes.bool,
    openCloseModal: PropTypes.func,
  };

  componentDidMount = () => {
    this.props.getStrings();
  };

  // shouldComponentUpdate = nextProps => {
  //   if (this.props.isModalOpen !== nextProps.isModalOpen) {
  //     return true;
  //   }
  //   return false;
  // };

  renderStringItems = strings =>
    strings.map((string, idx) => (
      <StringListItem key={idx} string={string.string} />
    ));

  render() {
    const { stringData } = this.props;
    return (
      <div>
        <h1>Strings</h1>
        {stringData && stringData.strings.length > 0 ? (
          this.renderStringItems(stringData.strings)
        ) : (
          <div> Add some strings to start your adventure!</div>
        )}

        <Modal
          show={this.props.isModalOpen}
          onClose={this.props.openCloseModal}
        >
          <CreateString
            isModalOpen={this.props.isModalOpen}
            openCloseModal={this.props.openCloseModal}
            headerText={messages.header}
            titleText={messages.title}
          />
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({ stringData: selectStrings(state) });
const mapDispatchToProps = {
  getStrings: () => ({ type: LOAD_STRINGS }),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StringContainer);
