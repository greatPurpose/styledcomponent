import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Container from "../components/Container";
import Column, { Spacer } from "../components/Column";
import Grid from "../components/Grid";


const IndexPage = ({ data }) => {
    const edges = data.allContentfulLesson.edges;

    const items = [];
    edges.forEach((edge, index) => {
        items.push(<Column span={{ medium: 6, large: 4 }}>
            <div>{edge.node.title}</div>
        </Column>)
    })
    
    return (
        <Layout>
            <SEO title="Home" />
            <Container>
                <Grid staggered>
                    {
                        items
                    }
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
