import { getApiDocs } from "@/lib/swagger";
import ReactSwagger from "./react-swagger";
import React from "react";

export default function IndexPage() {
  const spec = getApiDocs();
  return (
    <section className="container">
      <ReactSwagger spec={spec} />
    </section>
  );
}