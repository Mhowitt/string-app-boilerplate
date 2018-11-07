/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.HomePage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Welcome to All You Can String!',
  },
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Get started by submitting a String!',
  },
});
