import { useState } from 'react'
import {
  Heading,
  Paragraph,
  Button,
  Textfield,
  Radio,
  Checkbox,
  Switch,
  Fieldset,
  Card,
  Tag,
} from '@digdir/designsystemet-react'

export default function ColorCompareDemo() {
  const [selectedAccent, setSelectedAccent] = useState('opt1')
  const [selectedSec, setSelectedSec] = useState('opt1')

  return (
    <>
      {/* Full-width cardboard background section - using tinted for visibility */}
      <div style={{
        margin: '0 -2rem',
        padding: '2rem',
        background: 'var(--ds-color-cardboard-background-tinted)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Heading level={2} data-size="lg">Warm Background (background-tinted)</Heading>
          <Paragraph>Full-width section with cardboard background-tinted (#f5f3f1).</Paragraph>

          {/* Card on cardboard background */}
          <Card style={{ marginTop: '1.5rem', background: 'var(--ds-color-cardboard-surface-default)' }}>
            <Card.Block>
              <Heading level={3} data-size="sm">Card (surface-default)</Heading>
              <Paragraph>White card on cardboard background.</Paragraph>

              {/* Nested card - tinted */}
              <Card style={{ marginTop: '1rem', background: 'var(--ds-color-cardboard-surface-tinted)' }}>
                <Card.Block>
                  <Heading level={4} data-size="xs">Nested (surface-tinted)</Heading>
                  <Paragraph data-size="sm">Slightly cardboard tint.</Paragraph>

                  {/* Even deeper - hover */}
                  <Card style={{ marginTop: '1rem', background: 'var(--ds-color-cardboard-surface-hover)' }}>
                    <Card.Block>
                      <Heading level={4} data-size="xs">Deeper (surface-hover)</Heading>
                      <Paragraph data-size="sm">More pronounced cardboard.</Paragraph>

                      {/* Deepest - active */}
                      <Card style={{ marginTop: '1rem', background: 'var(--ds-color-cardboard-surface-active)' }}>
                        <Card.Block>
                          <Heading level={4} data-size="xs">Deepest (surface-active)</Heading>
                          <Paragraph data-size="sm">Strongest cardboard tone.</Paragraph>
                        </Card.Block>
                      </Card>
                    </Card.Block>
                  </Card>
                </Card.Block>
              </Card>
            </Card.Block>
          </Card>
        </div>
      </div>

      {/* Comparison section */}
      <section className="demo-section">
        <Heading level={2} data-size="lg">
          Color Comparison: Accent vs Sec
        </Heading>
        <Paragraph>
          Compare interactive elements to decide primary vs secondary.
        </Paragraph>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '1.5rem' }}>
          {/* Accent Column */}
          <div className="demo-stack" data-color="accent">
            <Heading level={3} data-size="md">Accent (Green)</Heading>

            <div className="demo-row">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="tertiary">Tertiary</Button>
            </div>

            <Textfield label="Accent Input" placeholder="Type here..." />

            <Fieldset>
              <Fieldset.Legend>Accent Radios</Fieldset.Legend>
              <Radio
                label="Option A"
                name="accent-radio"
                value="opt1"
                checked={selectedAccent === 'opt1'}
                onChange={() => setSelectedAccent('opt1')}
              />
              <Radio
                label="Option B"
                name="accent-radio"
                value="opt2"
                checked={selectedAccent === 'opt2'}
                onChange={() => setSelectedAccent('opt2')}
              />
            </Fieldset>

            <Checkbox label="Accent Checkbox" defaultChecked />
            <Switch label="Accent Switch" defaultChecked />
          </div>

          {/* Sec Column */}
          <div className="demo-stack" data-color="sec">
            <Heading level={3} data-size="md">Sec (Purple)</Heading>

            <div className="demo-row">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="tertiary">Tertiary</Button>
            </div>

            <Textfield label="Sec Input" placeholder="Type here..." />

            <Fieldset>
              <Fieldset.Legend>Sec Radios</Fieldset.Legend>
              <Radio
                label="Option A"
                name="sec-radio"
                value="opt1"
                checked={selectedSec === 'opt1'}
                onChange={() => setSelectedSec('opt1')}
              />
              <Radio
                label="Option B"
                name="sec-radio"
                value="opt2"
                checked={selectedSec === 'opt2'}
                onChange={() => setSelectedSec('opt2')}
              />
            </Fieldset>

            <Checkbox label="Sec Checkbox" defaultChecked />
            <Switch label="Sec Switch" defaultChecked />
          </div>
        </div>

        {/* Mixed buttons */}
        <div style={{ marginTop: '2rem' }}>
          <Heading level={3} data-size="sm">Mixed Usage</Heading>
          <div className="demo-row" style={{ marginTop: '1rem' }}>
            <Button data-color="accent">Accent Action</Button>
            <Button data-color="sec">Sec Action</Button>
            <Button data-color="neutral" variant="secondary">Neutral</Button>
          </div>
          <div className="demo-row" style={{ marginTop: '1rem' }}>
            <Tag data-color="accent">Accent</Tag>
            <Tag data-color="sec">Sec</Tag>
            <Tag data-color="cardboard">Warm</Tag>
            <Tag data-color="neutral">Neutral</Tag>
          </div>
        </div>
      </section>

      {/* Warm surface depths side by side */}
      <div style={{
        margin: '0 -2rem',
        padding: '2rem',
        background: 'var(--ds-color-cardboard-surface-tinted)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Heading level={2} data-size="lg">Warm Surface Depths</Heading>
          <Paragraph>All cardboard surface variants side by side.</Paragraph>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginTop: '1.5rem' }}>
            <Card style={{ background: 'var(--ds-color-cardboard-surface-default)' }}>
              <Card.Block>
                <Heading level={4} data-size="xs">surface-default</Heading>
                <Paragraph data-size="sm">#ffffff</Paragraph>
              </Card.Block>
            </Card>

            <Card style={{ background: 'var(--ds-color-cardboard-surface-tinted)' }}>
              <Card.Block>
                <Heading level={4} data-size="xs">surface-tinted</Heading>
                <Paragraph data-size="sm">#ece8e3</Paragraph>
              </Card.Block>
            </Card>

            <Card style={{ background: 'var(--ds-color-cardboard-surface-hover)' }}>
              <Card.Block>
                <Heading level={4} data-size="xs">surface-hover</Heading>
                <Paragraph data-size="sm">#e0d9d1</Paragraph>
              </Card.Block>
            </Card>

            <Card style={{ background: 'var(--ds-color-cardboard-surface-active)' }}>
              <Card.Block>
                <Heading level={4} data-size="xs">surface-active</Heading>
                <Paragraph data-size="sm">#d3c8be</Paragraph>
              </Card.Block>
            </Card>
          </div>

          {/* Warm with content inside */}
          <div style={{ marginTop: '2rem' }}>
            <Heading level={3} data-size="sm">Cards with Content on Warm</Heading>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '1rem' }}>
              <Card style={{ background: 'var(--ds-color-cardboard-surface-default)' }}>
                <Card.Block>
                  <Heading level={4} data-size="xs">Form on White Card</Heading>
                  <div style={{ marginTop: '1rem' }} data-color="accent">
                    <Textfield label="Name" placeholder="Enter name" />
                    <div className="demo-row" style={{ marginTop: '1rem' }}>
                      <Button>Submit</Button>
                      <Button variant="secondary">Cancel</Button>
                    </div>
                  </div>
                </Card.Block>
              </Card>

              <Card style={{ background: 'var(--ds-color-cardboard-surface-hover)' }}>
                <Card.Block>
                  <Heading level={4} data-size="xs">Form on Warm Card</Heading>
                  <div style={{ marginTop: '1rem' }} data-color="sec">
                    <Textfield label="Name" placeholder="Enter name" />
                    <div className="demo-row" style={{ marginTop: '1rem' }}>
                      <Button>Submit</Button>
                      <Button variant="secondary">Cancel</Button>
                    </div>
                  </div>
                </Card.Block>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
