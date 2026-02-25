import Link from "next/link";
// import Home from "./home";
import Hom from "./Hom";

export default function index({isLight}) {
  return (
    <>
      {/* <Home  isLight={isLight} /> */}
      <Hom isLight={isLight} />

    </>
  );
}
