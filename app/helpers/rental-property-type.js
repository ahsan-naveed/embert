import { helper } from '@ember/component/helper';

const communityPropertyTypes = [
  'condo',
  'townhouse',
  'apartment'
];

export function rentalPropertyType([propertyType]) {
  if(communityPropertyTypes.includes(propertyType.toLowerCase())) {
    return 'Community';
  }
  return 'Standalone';
}

export default helper(rentalPropertyType);
