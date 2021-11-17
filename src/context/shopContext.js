import React, { Component } from "react";
import Client from "shopify-buy";

const ShopContext = React.createContext();
// Initializing a client to return content in the store's primary language
const client = Client.buildClient({
  domain: process.env.REACT_APP_SHOPIFY_DOMAIN,
  storefrontAccessToken: process.env.REACT_APP_SHOPIFY_API,
});

class ShopProvider extends Component {
  state = {
    product: {},
    products: [],
    checkout: {},
    isCartOpen: false,
    isMenuOpen: false,
  };

  componentDidMount() {
      localStorage.checkout_id ? this.fetchCheckout(localStorage.checkout_id) : this.createCheckout()
  }

  createCheckout = async () => {
    const checkout = await client.checkout.create()
    localStorage.setItem('checkout-id', checkout.id)
    this.setState({ checkout })
  }

  fetchCheckout = async (checkoutId) => {
    client.checkout.fetch(checkoutId)
    .then((checkout) => {
        this.setState({ checkout })
    })
  };

  addItemtoCheckout = async () => {};

  removeLineItem = async (lineItemIdsToRemove) => {};

  fetchAllProducts = async () => {
    const products = await client.product.fetchAll()
    this.setState({ products });
  };

  fetchProductWithHandle = async(handle) => {
    const product = await client.product.fetchByHandle(handle)
    this.setState({ product })
  };

  closeCart = () => {};

  openCart = () => {};

  closeMenu = () => {};

  openMenu = () => {};

  render() {
    return <ShopContext.Provider 
        value={{ ...this.state, 
                    fetchAllProducts: this.fetchAllProducts,
                    fetchProductWithHandle: this.fetchProductWithHandle,
                    addItemToCheckout: this.addItemtoCheckout,
                    removeLineItem: this.removeLineItem,
                    closeCart: this.closeCart,
                    closeMenu: this.closeMenu,
                    openMenu: this.openMenu
                }}>
                    {this.props.children}
            </ShopContext.Provider>;
  }
}

const ShopConsumer = ShopContext.ShopConsumer;

export { ShopConsumer, ShopContext };

export default ShopProvider;
