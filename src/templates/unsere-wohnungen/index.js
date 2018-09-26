import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import PageWrapper from '../../components/PageWrapper/PageWrapper'
import { HTMLContent } from '../../components/Content'

import UnsereWohnungenTemplate from './UnsereWohnungenTemplate'

const UnsereWohnungen = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <PageWrapper>
      <UnsereWohnungenTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </PageWrapper>
  )
}

UnsereWohnungen.propTypes = {
  data: PropTypes.object.isRequired,
}

export default UnsereWohnungen

export const aboutPageQuery = graphql`
  query UnsereWohnungen($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
