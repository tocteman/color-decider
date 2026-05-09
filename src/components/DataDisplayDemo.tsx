import {
  Heading,
  Table,
  Card,
  List,
  Avatar,
  Badge,
  Tag,
  Chip,
  Tooltip,
  Popover,
  Button,
  Divider,
  Details,
  Paragraph,
} from '@digdir/designsystemet-react'

export default function DataDisplayDemo() {
  return (
    <section className="demo-section">
      <Heading level={2} data-size="lg">
        Data Display Components
      </Heading>

      <div className="demo-grid">
        <div className="demo-stack">
          <Heading level={3} data-size="sm">Table</Heading>
          <Table>
            <Table.Head>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Role</Table.HeaderCell>
                <Table.HeaderCell>Status</Table.HeaderCell>
              </Table.Row>
            </Table.Head>
            <Table.Body>
              <Table.Row>
                <Table.Cell>Alice Johnson</Table.Cell>
                <Table.Cell>Developer</Table.Cell>
                <Table.Cell>
                  <Tag data-color="success">Active</Tag>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Bob Smith</Table.Cell>
                <Table.Cell>Designer</Table.Cell>
                <Table.Cell>
                  <Tag data-color="warning">Away</Tag>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Carol Williams</Table.Cell>
                <Table.Cell>Manager</Table.Cell>
                <Table.Cell>
                  <Tag data-color="danger">Offline</Tag>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>

        <div className="demo-stack">
          <Heading level={3} data-size="sm">Cards</Heading>
          <Card>
            <Card.Block>
              <Heading level={4} data-size="xs">Card Title</Heading>
            </Card.Block>
            <Card.Block>
              <Paragraph>
                This is a basic card component that can contain any content.
              </Paragraph>
            </Card.Block>
            <Card.Block>
              <Button variant="secondary" data-size="sm">Learn more</Button>
            </Card.Block>
          </Card>

          <Card data-color="neutral">
            <Card.Block>
              <Paragraph>A neutral-colored card without header/footer.</Paragraph>
            </Card.Block>
          </Card>
        </div>

        <div className="demo-stack">
          <Heading level={3} data-size="sm">Lists</Heading>
          <List.Unordered>
            <List.Item>First item in the list</List.Item>
            <List.Item>Second item with more content</List.Item>
            <List.Item>Third item</List.Item>
          </List.Unordered>

          <List.Ordered>
            <List.Item>Ordered item one</List.Item>
            <List.Item>Ordered item two</List.Item>
            <List.Item>Ordered item three</List.Item>
          </List.Ordered>
        </div>

        <div className="demo-stack">
          <Heading level={3} data-size="sm">Avatars</Heading>
          <div className="demo-row">
            <Avatar aria-label="John Doe" data-size="sm">JD</Avatar>
            <Avatar aria-label="Jane Smith" data-size="md">JS</Avatar>
            <Avatar aria-label="Bob Wilson" data-size="lg">BW</Avatar>
          </div>

          <Heading level={3} data-size="sm">Badges (Numeric)</Heading>
          <div className="demo-row">
            <Badge.Position>
              <Button variant="secondary" data-size="sm">Inbox</Button>
              <Badge count={5} />
            </Badge.Position>
            <Badge.Position>
              <Button variant="secondary" data-size="sm">Notifications</Button>
              <Badge count={99} maxCount={99} />
            </Badge.Position>
            <Badge.Position>
              <Avatar aria-label="User">U</Avatar>
              <Badge count={3} data-color="danger" />
            </Badge.Position>
          </div>

          <Heading level={3} data-size="sm">Tags</Heading>
          <div className="demo-row">
            <Tag>Default Tag</Tag>
            <Tag data-color="success">Success</Tag>
            <Tag data-color="warning">Warning</Tag>
            <Tag data-color="danger">Danger</Tag>
            <Tag data-color="info">Info</Tag>
          </div>
          <div className="demo-row">
            <Tag variant="outline">Outline</Tag>
            <Tag variant="outline" data-color="success">Outline Success</Tag>
          </div>
        </div>

        <div className="demo-stack">
          <Heading level={3} data-size="sm">Chips</Heading>
          <div className="demo-row">
            <Chip.Checkbox name="filters" value="new">New</Chip.Checkbox>
            <Chip.Checkbox name="filters" value="popular" defaultChecked>Popular</Chip.Checkbox>
            <Chip.Removable>Removable</Chip.Removable>
          </div>

          <Heading level={3} data-size="sm">Divider</Heading>
          <div>
            <Paragraph>Content above divider</Paragraph>
            <Divider />
            <Paragraph>Content below divider</Paragraph>
          </div>

          <Heading level={3} data-size="sm">Details (Accordion)</Heading>
          <Details>
            <Details.Summary>Click to expand</Details.Summary>
            <Details.Content>
              <Paragraph>
                This content is hidden by default and revealed when the summary is clicked.
              </Paragraph>
            </Details.Content>
          </Details>
        </div>

        <div className="demo-stack">
          <Heading level={3} data-size="sm">Tooltip</Heading>
          <div className="demo-row">
            <Tooltip content="This is a helpful tooltip">
              <Button variant="secondary">Hover me</Button>
            </Tooltip>
          </div>

          <Heading level={3} data-size="sm">Popover</Heading>
          <Popover.TriggerContext>
            <Popover.Trigger asChild>
              <Button variant="secondary">Click for popover</Button>
            </Popover.Trigger>
            <Popover>
              <Heading level={4} data-size="xs">Popover Title</Heading>
              <Paragraph data-size="sm">
                This is popover content with more detailed information.
              </Paragraph>
            </Popover>
          </Popover.TriggerContext>
        </div>
      </div>
    </section>
  )
}
