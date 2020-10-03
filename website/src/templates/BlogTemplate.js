import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

export default function BlogTemplate({ data }) {
  const blog = data.markdownRemark;
  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: blog.html }}></div>
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
