import axios from 'axios';
import { showAlert } from './alerts';

const stripe = Stripe(
  'pk_test_51QC7FCCvLvmnLt97kx3EmDdgnFtXLxsyGLhS7A7wUHuU7KExoQiBku9HnKnOqk3h3Y8nERIWolFxcXxbMqVwTNaN001u4NHfrT',
);

export const bookTour = async tourId => {
  try {
    // 1) Get checkout session from API
    const session = await axios(
      // `http://localhost:3000/api/v1/bookings/checkout-session/${tourId}`,
      `/api/v1/bookings/checkout-session/${tourId}`,
    );
    // console.log(session);

    // 2) Create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
