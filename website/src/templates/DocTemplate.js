import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SidePanel from "../components/SidePanel";

export default function DocTemplate({ data }) {
  const doc = data.markdownRemark;
  return (
    <Layout>
      <SidePanel />
      <div dangerouslySetInnerHTML={{ __html: doc.html }}></div>
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
