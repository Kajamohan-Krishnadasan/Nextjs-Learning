"use client";
import React from "react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="error">
      <div className="error-message">
        <h1>Oops!</h1>

        <div>
          <p>{error.message}</p>
          <p>
            <button
              onClick={reset}
              className="bg-indigo-600 text-white p-2  rou nded-md m-2"
            >
              Try again
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
