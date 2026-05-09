import { useState } from 'react'
import {
  Heading,
  Tabs,
  Breadcrumbs,
  Pagination,
  Link,
  SkipLink,
  Paragraph,
} from '@digdir/designsystemet-react'

export default function NavigationDemo() {
  const [currentPage, setCurrentPage] = useState(3)
  const [activeTab, setActiveTab] = useState('tab1')

  return (
    <section className="demo-section">
      <Heading level={2} data-size="lg">
        Navigation Components
      </Heading>

      <div className="demo-stack" style={{ gap: '2rem' }}>
        <div>
          <Heading level={3} data-size="sm">Skip Link</Heading>
          <Paragraph data-size="sm" style={{ color: 'var(--ds-color-neutral-text-subtle)' }}>
            Press Tab to reveal the skip link
          </Paragraph>
          <SkipLink href="#main-content">Skip to main content</SkipLink>
        </div>

        <div>
          <Heading level={3} data-size="sm">Breadcrumbs</Heading>
          <Breadcrumbs aria-label="You are here:">
            <Breadcrumbs.List>
              <Breadcrumbs.Item>
                <Breadcrumbs.Link href="#">Home</Breadcrumbs.Link>
              </Breadcrumbs.Item>
              <Breadcrumbs.Item>
                <Breadcrumbs.Link href="#">Products</Breadcrumbs.Link>
              </Breadcrumbs.Item>
              <Breadcrumbs.Item>
                <Breadcrumbs.Link href="#">Category</Breadcrumbs.Link>
              </Breadcrumbs.Item>
              <Breadcrumbs.Item>
                Current Page
              </Breadcrumbs.Item>
            </Breadcrumbs.List>
          </Breadcrumbs>
        </div>

        <div>
          <Heading level={3} data-size="sm">Tabs</Heading>
          <Tabs value={activeTab} onChange={setActiveTab}>
            <Tabs.List>
              <Tabs.Tab value="tab1">Overview</Tabs.Tab>
              <Tabs.Tab value="tab2">Details</Tabs.Tab>
              <Tabs.Tab value="tab3">Reviews</Tabs.Tab>
              <Tabs.Tab value="tab4" aria-disabled="true">Disabled</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value="tab1">
              <div style={{ padding: '1rem' }}>
                <Paragraph>Overview content goes here. This tab shows general information.</Paragraph>
              </div>
            </Tabs.Panel>
            <Tabs.Panel value="tab2">
              <div style={{ padding: '1rem' }}>
                <Paragraph>Detailed specifications and technical information.</Paragraph>
              </div>
            </Tabs.Panel>
            <Tabs.Panel value="tab3">
              <div style={{ padding: '1rem' }}>
                <Paragraph>Customer reviews and ratings.</Paragraph>
              </div>
            </Tabs.Panel>
          </Tabs>
        </div>

        <div>
          <Heading level={3} data-size="sm">Pagination</Heading>
          <Pagination>
            <Pagination.List>
              <Pagination.Item>
                <Pagination.Button
                  aria-label="Previous page"
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                >
                  Previous
                </Pagination.Button>
              </Pagination.Item>
              {[1, 2, 3, 4, 5].map(page => (
                <Pagination.Item key={page}>
                  <Pagination.Button
                    aria-label={`Page ${page}`}
                    aria-current={currentPage === page ? 'page' : undefined}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </Pagination.Button>
                </Pagination.Item>
              ))}
              <Pagination.Item>
                <span style={{ padding: '0 0.5rem' }}>...</span>
              </Pagination.Item>
              <Pagination.Item>
                <Pagination.Button
                  aria-label="Page 10"
                  onClick={() => setCurrentPage(10)}
                >
                  10
                </Pagination.Button>
              </Pagination.Item>
              <Pagination.Item>
                <Pagination.Button
                  aria-label="Next page"
                  onClick={() => setCurrentPage(p => Math.min(10, p + 1))}
                  disabled={currentPage === 10}
                >
                  Next
                </Pagination.Button>
              </Pagination.Item>
            </Pagination.List>
          </Pagination>
          <Paragraph data-size="sm" style={{ marginTop: '0.5rem', color: 'var(--ds-color-neutral-text-subtle)' }}>
            Current page: {currentPage}
          </Paragraph>
        </div>

        <div>
          <Heading level={3} data-size="sm">Links</Heading>
          <div className="demo-row">
            <Link href="#">Default Link</Link>
            <Link href="#" data-color="neutral">Neutral Link</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
