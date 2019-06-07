import {people, restaurants} from './data';

const personKeys = Object.keys(people);
const restaurantsKeys = Object.keys(restaurants);

const getCompatibleRestaurants = (key, person) => {
  return restaurantsKeys.filter(key => {
    const restaurant = restaurants[key];
    const compatibleFoodTypes = Object.keys(restaurant).filter(propKey => restaurant[propKey] && person[propKey]);
    return compatibleFoodTypes.length > 0
  })
};

const main = () => {
  const personToRestaurant = personKeys.map(key => {
    const compatibleRestaurants = getCompatibleRestaurants(key, people[key]);
    return {
      key,
      compatibleRestaurants
    }
  });

  const html = `
  <div>
      ${personToRestaurant.map(item =>
      `<h2>${item.key}</h2>
      <h3>${item.compatibleRestaurants}</h3>`
    ).join('')}
   </div>
`;

  document.body.innerHTML = html;

};

main();
