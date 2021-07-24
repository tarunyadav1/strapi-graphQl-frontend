import React from "react";
import { useParams } from "react-router-dom";

export default function ReviewDetails() {
  const { reviewId } = useParams();
  return (
    <div>
      <div>{reviewId}</div>
    </div>
  );
}
