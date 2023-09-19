export default function canUserPlaceOrder({ processed }, { hasStock }) {
  const canUserPlaceOrder = hasStock && processed;
}
