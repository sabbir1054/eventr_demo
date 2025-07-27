"use client";
import React from "react";
import StoreProvider from "../StoreProvide";

export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <StoreProvider>
        <div className="container mx-auto ">
          {/* <NavBar /> */}
          <div className="min-h-screen ">{children}</div>
        </div>
        {/* <Footer /> */}
      </StoreProvider>
    </>
  );
}
