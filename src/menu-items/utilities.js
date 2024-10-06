import { IconMotorbike, IconShoppingCart } from '@tabler/icons-react';

import { store } from '../store/index';

const icons = {
  IconMotorbike,
  IconShoppingCart
};

var arrAdmin = [];

store.subscribe(() => {
  arrAdmin = [
    {
      id: 'Purchase',
      title: 'Purchase',
      type: 'collapse',
      icon: icons.IconShoppingCart,
      children: [
        {
          id: 'bike',
          title: 'Bike',
          type: 'item',
          url: '/bikePurchaseForm',
          icon: icons.IconMotorbike,
          breadcrumbs: false
        }
      ]
    },
    {
      id: 'Sale',
      title: 'Sale',
      type: 'collapse',
      icon: icons.IconShoppingCart,
      children: [
        {
          id: 'salebike',
          title: 'Bike Sale',
          type: 'item',
          url: '/bikeSalse',
          icon: icons.IconMotorbike,
          breadcrumbs: false
        }
      ]
    }
  ];

  createUtilitiesObject();
});
const utilities = {
  id: 'utilities',
  title: 'Utilities',
  type: 'group',
  children: []
};

function createUtilitiesObject() {
  utilities.children = arrAdmin;
  // utilities.children =  arrAdmin ;
}

export default utilities;
