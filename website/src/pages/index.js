import React from "react";
import Layout from "../components/Layout";

const HomePage = () => {
  return (
    <Layout>
      <section className="home--landing_container">
        <h1 className="home--title">
          Server-side Swift <br></br> made{" "}
          <span className="home--title-red">fast</span>,{" "}
          <span className="home--title-blue">flexible</span> <br></br> and
          <span className="home--title-green"> easy</span>.
        </h1>
        <button className="home--cta_button">Get Started</button>
      </section>
      <section className="home--welcome_container">
        <section>
          <article className="home--welcome_text">
            <h1 className="header-1">Welcome to Kitura</h1>
            <p className="paragraph">
              Kitura is an open source web framework for server-side Swift.
            </p>
            <p className="paragraph">
              Use your Swift skills to build web applications and REST APIs,
              with full support for databases, WebSockets, OpenAPI and much
              more.
            </p>
            <p className="paragraph">
              It's easy to get started thanks to intuitive APIs, comprehensive
              documentation, and self-paced tutorials.
            </p>
          </article>

          <h2 className="header-2">Why Kitura?</h2>
          <section className="home--welcome_card_container">
            <article className="home--welcome_card">
              <h3 className="header-3 home--title-red">Fast</h3>
              <p>
                Kitura starts quickly, has fast response times and low memory
                footprint. It's built for the cloud.
              </p>
            </article>
            <article className="home--welcome_card">
              <h3 className="header-3 home--title-blue">Flexible</h3>
              <p>
                Kitura gives you complete control and flexibility. A rich
                package ecosystem provides everything you'll need for your next
                app.
              </p>
            </article>
            <article className="home--welcome_card">
              <h3 className="header-3 home--title-green">Easy</h3>
              <p>
                Kitura bridges the gap between front-end and back-end
                development. Get started with just a few lines of code.
              </p>
            </article>
          </section>
        </section>
        <aside className="home--welcome_sidebar">
          <section>
            <h3>Latest Blog Posts</h3>
          </section>
          <section>
            <h3>Tutorials</h3>
          </section>
          <section>
            <h3>Community</h3>
          </section>
        </aside>
      </section>
    </Layout>
  );
};

export default HomePage;
