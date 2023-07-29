let subtotal = 0;

const calculateTax = subtotal => {
  const tax = subtotal * 0.13;
  const formattedTax = tax.toFixed(2);
  return formattedTax;
};

const calculateTotal = subtotal => {
  const tax = calculateTax(subtotal);
  const total = parseFloat(subtotal) + parseFloat(tax);
  const formattedTotal = total.toFixed(2);
  return formattedTotal;
};

const getImgLink = title => {
  let imgLink;
  switch (title) {
    case 'Rishab Joshwall':
      imgLink = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fdepositphotos.com%2F452071492%2Fstock-illustration-minimalistic-vector-illustration-gay-sex.html&psig=AOvVaw1zN8Jv61IJOpvnx2jIDAj0&ust=1690741288753000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwjX8tOgxLSAAxXxbmwGHZziCRkQjRx6BAgAEAw';
      break;
    case 'Ronak Pandy':
      imgLink = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fdepositphotos.com%2F452071492%2Fstock-illustration-minimalistic-vector-illustration-gay-sex.html&psig=AOvVaw1zN8Jv61IJOpvnx2jIDAj0&ust=1690741288753000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwjX8tOgxLSAAxXxbmwGHZziCRkQjRx6BAgAEAw';
      break;
    case 'Andukiran Bhatura':
      imgLink = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fdepositphotos.com%2F452071492%2Fstock-illustration-minimalistic-vector-illustration-gay-sex.html&psig=AOvVaw1zN8Jv61IJOpvnx2jIDAj0&ust=1690741288753000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwjX8tOgxLSAAxXxbmwGHZziCRkQjRx6BAgAEAw';
      break;
    case 'Noman Paton':
      imgLink = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fdepositphotos.com%2F452071492%2Fstock-illustration-minimalistic-vector-illustration-gay-sex.html&psig=AOvVaw1zN8Jv61IJOpvnx2jIDAj0&ust=1690741288753000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwjX8tOgxLSAAxXxbmwGHZziCRkQjRx6BAgAEAw';
      break;
    default:
      imgLink = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fdepositphotos.com%2F452071492%2Fstock-illustration-minimalistic-vector-illustration-gay-sex.html&psig=AOvVaw1zN8Jv61IJOpvnx2jIDAj0&ust=1690741288753000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwjX8tOgxLSAAxXxbmwGHZziCRkQjRx6BAgAEAw';}

  return imgLink;
};

$('.add-button').on('click', function () {
  const title = $(this).data('title');
  const price = $(this).data('price');
  const imgLink = getImgLink(title);

  const element = `
    <li class="cart-item">
      <img src="${imgLink}" alt="${title}">
      <div class="cart-item-dets">
        <p class="cart-item-heading">${title}</p>
        <p class="g-price">$${price}</p>
      </div>
    </li>
  `;
  $('.cart-items').append(element);

  subtotal = subtotal + price;

  const formattedSubtotal = subtotal.toFixed(2);
  const tax = calculateTax(subtotal);
  const total = calculateTotal(subtotal);

  $('.cart-math').html(`
    <p class="cart-math-item">
      <span class="cart-math-header">Subtotal:</span>
      <span class="g-price subtotal">$${formattedSubtotal}</span>
    </p>
    <p class="cart-math-item">
      <span class="cart-math-header">Tax:</span>
      <span class="g-price tax">$${tax}</span>
    </p>
    <p class="cart-math-item">
      <span class="cart-math-header">Total:</span>
      <span class="g-price total">$${total}</span>
    </p>
  `);
});