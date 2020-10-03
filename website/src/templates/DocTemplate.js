import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SidePanel from "../components/SidePanel";

export default function DocTemplate({ data, location }) {
  const doc = data.markdownRemark;
  return (
    <Layout>
      <section className="doc--container">
        <SidePanel location={location} />
        <div
          className="doc--content"
          dangerouslySetInnerHTML={{ __html: doc.html }}
        ></div>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
    }
  }
`;
