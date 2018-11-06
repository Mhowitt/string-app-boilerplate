import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { LOAD_STRINGS } from './reducer';
import { selectStrings } from './selectors';
import StringListItem from '../../components/StringListItem';

class StringContainer extends React.Component {
  static propTypes = {
    getStrings: PropTypes.func,
    stringData: PropTypes.object,
  };

  componentDidMount = () => {
    this.props.getStrings();
  };

  renderStringItems = strings =>
    strings.map(string => (
      <StringListItem key={string.id} string={string.string} />
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
