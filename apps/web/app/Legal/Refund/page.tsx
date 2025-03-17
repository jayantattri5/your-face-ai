import React from "react";

export default function Refund () {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-8 text-white-800">
      <header>
        <h1 className="text-4xl font-bold mb-4 pb-4">
          Your Face AI- Refund Policy
        </h1>
        </header>
        <p className="mt-2 text-xl pb-4">
        You're only eligible for a refund if you've not created a model yet and have generated fewer than 20 photos over the lifetime of your account.
        </p>
        <p className="mt-2 text-xl pb-4">
        If you've already used Your Face AI to create a model or take photos or videos, we cannot offer a refund as costs incurred for generative AI are extremely high.
        </p>
        <p className="mt-2 text-xl pb-4">
        In turn, our upstream providers do not let us ask for refunds for the GPU processing time used to create your AI models and generate your photos and videos. This would make it a loss making endeavor for us. During sign up you agree to withhold your right to refund for this reason.
        </p>
        <p className="mt-2  text-xl font-bold pb-4">
        You can cancel your subscription at any time though your subscription won't renew and you will not be charged again.
        </p>
    </div>
  )
}
