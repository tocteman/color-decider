import { useState } from 'react'
import {
  Heading,
  Textfield,
  Select,
  Checkbox,
  Radio,
  Switch,
  Button,
  Fieldset,
  ErrorSummary,
  Field,
  Label,
  Textarea,
} from '@digdir/designsystemet-react'

export default function FormDemo() {
  const [showErrors, setShowErrors] = useState(false)
  const [switchOn, setSwitchOn] = useState(false)
  const [selectedRadio, setSelectedRadio] = useState('option1')
  const [checkboxes, setCheckboxes] = useState({
    terms: false,
    newsletter: true,
    notifications: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowErrors(true)
  }

  return (
    <section className="demo-section">
      <Heading level={2} data-size="lg">
        Form Components
      </Heading>

      <form onSubmit={handleSubmit}>
        {showErrors && (
          <ErrorSummary style={{ marginBottom: '1.5rem' }}>
            <ErrorSummary.Heading>
              Please fix the following errors
            </ErrorSummary.Heading>
            <ErrorSummary.List>
              <ErrorSummary.Item>
                <ErrorSummary.Link href="#email">
                  Email is required
                </ErrorSummary.Link>
              </ErrorSummary.Item>
              <ErrorSummary.Item>
                <ErrorSummary.Link href="#password">
                  Password must be at least 8 characters
                </ErrorSummary.Link>
              </ErrorSummary.Item>
            </ErrorSummary.List>
          </ErrorSummary>
        )}

        <div className="demo-grid">
          <div className="demo-stack">
            <Heading level={3} data-size="sm">Text Inputs</Heading>

            <Textfield label="Full Name" placeholder="Enter your name" />

            <Textfield
              id="email"
              label="Email Address"
              type="email"
              placeholder="you@example.com"
              error={showErrors ? 'Email is required' : undefined}
            />

            <Textfield
              id="password"
              label="Password"
              type="password"
              placeholder="Min 8 characters"
              error={showErrors ? 'Password must be at least 8 characters' : undefined}
            />

            <Textfield
              label="Amount"
              type="number"
              placeholder="0.00"
              prefix="$"
            />

            <Textfield
              label="Disabled Input"
              disabled
              value="Cannot edit this"
            />
          </div>

          <div className="demo-stack">
            <Heading level={3} data-size="sm">Select & Textarea</Heading>

            <Field>
              <Label>Country</Label>
              <Select>
                <Select.Option value="">Choose a country...</Select.Option>
                <Select.Option value="no">Norway</Select.Option>
                <Select.Option value="se">Sweden</Select.Option>
                <Select.Option value="dk">Denmark</Select.Option>
                <Select.Option value="fi">Finland</Select.Option>
              </Select>
            </Field>

            <Field>
              <Label>Category</Label>
              <Select>
                <Select.Optgroup label="Development">
                  <Select.Option value="frontend">Frontend</Select.Option>
                  <Select.Option value="backend">Backend</Select.Option>
                </Select.Optgroup>
                <Select.Optgroup label="Design">
                  <Select.Option value="ui">UI Design</Select.Option>
                  <Select.Option value="ux">UX Research</Select.Option>
                </Select.Optgroup>
              </Select>
            </Field>

            <Textfield
              label="Bio"
              multiline
              placeholder="Tell us about yourself..."
              rows={4}
            />

            <Field>
              <Label>Read-only Textarea</Label>
              <Textarea readOnly value="This content cannot be modified" />
            </Field>
          </div>

          <div className="demo-stack">
            <Heading level={3} data-size="sm">Checkboxes</Heading>

            <Fieldset>
              <Fieldset.Legend>Preferences</Fieldset.Legend>
              <Checkbox
                label="I accept the terms and conditions"
                checked={checkboxes.terms}
                onChange={(e) => setCheckboxes(prev => ({ ...prev, terms: e.target.checked }))}
              />
              <Checkbox
                label="Subscribe to newsletter"
                checked={checkboxes.newsletter}
                onChange={(e) => setCheckboxes(prev => ({ ...prev, newsletter: e.target.checked }))}
              />
              <Checkbox
                label="Enable push notifications"
                checked={checkboxes.notifications}
                onChange={(e) => setCheckboxes(prev => ({ ...prev, notifications: e.target.checked }))}
              />
              <Checkbox label="Disabled option" disabled />
            </Fieldset>

            <Heading level={3} data-size="sm">Radio Buttons</Heading>

            <Fieldset>
              <Fieldset.Legend>Contact Method</Fieldset.Legend>
              <Radio
                label="Email"
                name="contact"
                value="option1"
                checked={selectedRadio === 'option1'}
                onChange={() => setSelectedRadio('option1')}
              />
              <Radio
                label="Phone"
                name="contact"
                value="option2"
                checked={selectedRadio === 'option2'}
                onChange={() => setSelectedRadio('option2')}
              />
              <Radio
                label="Mail"
                name="contact"
                value="option3"
                checked={selectedRadio === 'option3'}
                onChange={() => setSelectedRadio('option3')}
              />
              <Radio label="Disabled option" name="contact" value="disabled" disabled />
            </Fieldset>
          </div>

          <div className="demo-stack">
            <Heading level={3} data-size="sm">Switches</Heading>

            <Switch
              label="Dark mode"
              checked={switchOn}
              onChange={(e) => setSwitchOn(e.target.checked)}
            />
            <Switch label="Notifications enabled" defaultChecked />
            <Switch label="Disabled switch" disabled />

            <Heading level={3} data-size="sm">Buttons</Heading>

            <div className="demo-row">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="tertiary">Tertiary</Button>
            </div>

            <div className="demo-row">
              <Button data-color="danger">Danger</Button>
              <Button data-color="accent">Accent</Button>
              <Button data-color="sec">Sec</Button>
            </div>

            <div className="demo-row">
              <Button data-size="sm">Small</Button>
              <Button data-size="md">Medium</Button>
              <Button data-size="lg">Large</Button>
            </div>

            <div className="demo-row">
              <Button disabled>Disabled</Button>
              <Button loading>Loading</Button>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
          <Button type="submit">Submit Form</Button>
          <Button type="button" variant="secondary" onClick={() => setShowErrors(false)}>
            Clear Errors
          </Button>
        </div>
      </form>
    </section>
  )
}
