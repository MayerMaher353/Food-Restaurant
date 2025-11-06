// src/Components/menu/MenuItemCard.tsx

import React from 'react';
import type { MenuItem } from '../../../types/menuTypes';

interface MenuItemCardProps {
  item: MenuItem;
}

function MenuItemCard({ item }: MenuItemCardProps) {
  const { name, price, description, imageUrl, currency, addToCartUrl } = item;

  // Format price string
  const formattedPrice = `${currency}${price.toFixed(2)}`;

  return (
    <div className="home-menu-item col-lg-6 col-sm-12 col-md-6">
      <div className="menu-img-holder">
        <img src={imageUrl} alt={`Image of ${name}`} />
      </div>
      <div className="menu-content-holder">
        <div className="menu-item-info">
          <p>{name}</p>
          <p>{formattedPrice}</p>
        </div>
        <p className="abt-menu-item">
          {description}
          {/* In a real app, this would use an onClick handler */}
          <a href={addToCartUrl || '#'} title={`Add ${name} to cart`}>
            <i className="fas fa-cart-shopping"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default MenuItemCard;