/*
 * StringContainer Messages
 *
 * This contains all the text for the StringContainer container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.StringContainer';

//has no importance to the app itself. I just like to be a little
//creative

function pickRandomWord() {
  const randomSWords = [
    'Saucy',
    'Silly',
    'Sickening',
    'Scintillating',
    'Sassy',
    'Sincere',
    'Strong',
  ];

  return randomSWords[Math.floor(Math.random() * randomSWords.length)];
}
export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: `Add Another ${pickRandomWord()} String`,
  },
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Below',
  },
});
