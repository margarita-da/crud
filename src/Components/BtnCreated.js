import React from "react";
import { Link } from "react-router-dom";
export default function BtnCreateds() {
  return (
    <Link to="/posts/new" className="btn btn-primary">
      Создать пост
    </Link>
  );
}
