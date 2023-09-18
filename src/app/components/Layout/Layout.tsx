"use client";
import NavBar from "../NavBar/Navbar";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  )
}