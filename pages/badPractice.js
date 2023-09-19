export default function canUserPlaceOrder(payment, product) {
  let canPlaceOrder = false;
  if (payment.hasStock === true) {
    if (payment.processed === true) {
      if (payment.processed === true) {
        canPlaceOrder = true;
      } else {
        canPlaceOrder = false;
      }
    } else {
      canPlaceOrder = false;
    }
    return canPlaceOrder;
  }
  return <ul></ul>;
}
