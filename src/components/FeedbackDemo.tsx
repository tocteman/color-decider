import {
  Heading,
  Alert,
  Spinner,
  Skeleton,
  Button,
  Dialog,
  Paragraph,
} from '@digdir/designsystemet-react'

export default function FeedbackDemo() {
  return (
    <section className="demo-section">
      <Heading level={2} data-size="lg">
        Feedback Components
      </Heading>

      <div className="demo-stack" style={{ gap: '2rem' }}>
        <div>
          <Heading level={3} data-size="sm">Alerts</Heading>
          <div className="demo-stack">
            <Alert data-color="info">
              <Heading level={4} data-size="xs">Information</Heading>
              <Paragraph>This is an informational message with helpful context for the user.</Paragraph>
            </Alert>

            <Alert data-color="success">
              <Heading level={4} data-size="xs">Success</Heading>
              <Paragraph>Your changes have been saved successfully.</Paragraph>
            </Alert>

            <Alert data-color="warning">
              <Heading level={4} data-size="xs">Warning</Heading>
              <Paragraph>Please review your input before proceeding.</Paragraph>
            </Alert>

            <Alert data-color="danger">
              <Heading level={4} data-size="xs">Error</Heading>
              <Paragraph>Something went wrong. Please try again later.</Paragraph>
            </Alert>
          </div>
        </div>

        <div>
          <Heading level={3} data-size="sm">Spinners</Heading>
          <div className="demo-row">
            <Spinner aria-label="Loading" data-size="sm" />
            <Spinner aria-label="Loading" data-size="md" />
            <Spinner aria-label="Loading" data-size="lg" />
          </div>
          <div className="demo-row" style={{ marginTop: '1rem' }}>
            <Spinner aria-label="Loading" data-color="accent" />
            <Spinner aria-label="Loading" data-color="neutral" />
          </div>
        </div>

        <div>
          <Heading level={3} data-size="sm">Skeleton Loading</Heading>
          <div className="demo-stack" style={{ maxWidth: '400px' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <Skeleton variant="circle" width="48px" height="48px" />
              <div style={{ flex: 1 }}>
                <Skeleton variant="text" width="60%" />
                <Skeleton variant="text" width="40%" style={{ marginTop: '0.5rem' }} />
              </div>
            </div>
            <Skeleton variant="rectangle" height="100px" />
            <Skeleton variant="text" />
            <Skeleton variant="text" width="80%" />
          </div>
        </div>

        <div>
          <Heading level={3} data-size="sm">Dialog</Heading>
          <Dialog.TriggerContext>
            <Dialog.Trigger asChild>
              <Button>Open Dialog</Button>
            </Dialog.Trigger>
            <Dialog>
              <Dialog.Block>
                <Heading level={3} data-size="sm">Confirm Action</Heading>
              </Dialog.Block>
              <Dialog.Block>
                <Paragraph>
                  Are you sure you want to proceed with this action? This cannot be undone.
                </Paragraph>
              </Dialog.Block>
              <Dialog.Block>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                  <Dialog.Trigger asChild>
                    <Button variant="secondary">Cancel</Button>
                  </Dialog.Trigger>
                  <Dialog.Trigger asChild>
                    <Button data-color="danger">Confirm</Button>
                  </Dialog.Trigger>
                </div>
              </Dialog.Block>
            </Dialog>
          </Dialog.TriggerContext>
        </div>
      </div>
    </section>
  )
}
