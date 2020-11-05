import React from 'react';

export default function Alert({ message, typeError }) {
  return (
    <div class={`alert alert-${typeError}`} role="alert">
      {message}
    </div>
  );
}
