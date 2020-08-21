import axios from 'axios';
import endpoints from '../config/endpoints.json';

/**
 * @param {array}
 * @return {array}
 */
export const getFirstNames = (characters) => characters.map((character) => character.name.split(' ')[0]);

/**
 * Gets a list of characters age based on their name
 * @param {array}
 * @return {array}
 */
export const getAgeListByName = (names) => {
  // Create request parameters url
  const requestString = names.reduce((reqString, name) => `${reqString}name[]=${name}&`, '');

  // Make the request
  const charactersAgeList = axios.get(`${endpoints.ageAPI}?${requestString}`)
    .then((res) => res)
    .catch((err) => err);

  return charactersAgeList;
};

/**
 * Merge the information
 * @param {array}
 * @param {array}
 * @param {sting}
 * @return {object}
 */
export const getDataWithAge = (infoList, agesList, url) => {
  const data = infoList.map(({
    name, gender, born, playedBy,
  }) => {
    // Get only the first name
    const firstName = name.split(' ')[0];
    // Find the age based on name
    const character = agesList.find((char) => char.name === firstName) || { age: 0 };
    return {
      name,
      gender,
      born,
      age: character.age,
      actor: playedBy[0],
    };
  });
  // The url will be used as id
  return { url, data };
};

/**
 * Sort array by column
 * @param {array}
 * @param {bool}
 * @param {string}
 * @return {array}
 */
export const sortBy = (data, asc, key) => (asc
  ? data.sort((charA, charB) => (charA[key] > charB[key] ? 1 : -1))
  : data.sort((charA, charB) => (charA[key] > charB[key] ? -1 : 1))
);
