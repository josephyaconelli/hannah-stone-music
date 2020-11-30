import React from 'react'
import Layout from '../components/Layout'
import { Button, Container } from 'react-bootstrap'

const NotFoundPage = () => (
  <Layout>
    <div>
      <h1><i>Well shit.</i>It's a404 error</h1>
      <p>Sorry about that, it seems we've got our wires crossed. <Button>Hello World</Button></p>
    </div>
  </Layout>
)

export default NotFoundPage
