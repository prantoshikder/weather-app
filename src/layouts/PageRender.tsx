"use client";

import Loading from "@/components/shared/Loading";
import React, { useEffect, useState } from "react";

const PageRender = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return <div>{isLoading ? <Loading /> : <main>{children}</main>}</div>;
};

export default PageRender;
