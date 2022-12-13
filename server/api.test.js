import api from './api.js';

describe('API Tests', () => {

  it('Products has expected information', async () => {
    let product = await api.getProduct(37311)
    expect(product.id).not.toBe(null);
    expect(product.name).not.toBe(null);
    expect(product.slogan).not.toBe(null);
    expect(product.description).not.toBe(null);
    expect(product.default_price).not.toBe(null);
    expect(product.features).not.toBe(null);
  })

  it('Products has expected information', async () => {
    let style = await api.getStyles(37311)
    expect(style.product_id).not.toBe(null);
    expect(style.results).not.toBe(null);
    expect(style.results[0].style_id).not.toBe(null);
    expect(style.results[0].name).not.toBe(null);
    expect(style.results[0].original_price).not.toBe(null);
  })

  it('Gets Meta Review', async () => {
    let review = await api.getMetaReviews(37311)
    expect(review.ratings).not.toBe(null);
  })

  it('Products has expected information', async () => {
    let cartResponse = await api.addToCart("1281033")
    expect(cartResponse).toBe("Created");
  })

  it('Posts Interaction in Proper Format', async () => {
    let e = {
      timeStamp: 12345,
      target: {tagName: 'Hello'}
    }
    let interactionResponse = await api.postInteraction(e, 'Module')
    expect(interactionResponse.status).toBe(201);
  })
})