import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe(
  'pk_test_51IRwzTLGhZxTzXUDhSfpHI3RjJKzq7pXPPVdwmUH9jg1uv1luYtRSmG5tIqUuyOfivlo8vYK0zFHtHdZGrHbCwFn008ZNUZAVX'
);

export const bookTour = async (tourId) => {
  try {
    // 1) Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);

    // 2) Create checkout form + charge the credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    showAlert('error', err);
  }
};
