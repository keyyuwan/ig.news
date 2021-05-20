// lib do stripe que lida com front-end

import { loadStripe } from '@stripe/stripe-js'

export async function getStripeJs() {
    const stripeJs = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)

    return stripeJs
}