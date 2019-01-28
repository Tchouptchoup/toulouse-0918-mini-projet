import React from 'react';

export const formatText = (description) => {
  const double = /\n+/g
  return description.split(double).map((p, index) => {
    return (
      <p className="mb-3" key={index}>{p}</p>
    )
  })
}