import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Container from "../components/Container";
import Column, { Spacer } from "../components/Column";
import Grid from "../components/Grid";


const IndexPage = ({ data }) => {
    const t_title = data.allContentfulLesson.edges[0];
    con

    return (
        <Layout>
            <SEO title="Home" />
            <Container>
                <Grid staggered>
                    <Column span={{ medium: 6, large: 4 }}>
                        <div>{t_title}</div>
                    </Column>
                    <Spacer />
                    <Column justifySelf="stretch" span={{ medium: 6, large: 7 }}>
                    </Column>
                </Grid>

            </Container>
        </Layout>
    );
}

export const IndexPageDefault = graphql`
    query{
        allContentfulLesson{
            edges {
                node{
                    title
                }
            }
        }
    }
`;

export default IndexPage
