import { useState } from 'react'
import { Heading, Paragraph, Switch } from '@digdir/designsystemet-react'
import ColorCompareDemo from './components/ColorCompareDemo'
import FormDemo from './components/FormDemo'
import NavigationDemo from './components/NavigationDemo'
import FeedbackDemo from './components/FeedbackDemo'
import DataDisplayDemo from './components/DataDisplayDemo'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className="app-wrapper" data-color-scheme={darkMode ? 'dark' : 'light'}>
      <div className="demo-container">
        <header style={{ marginBottom: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <Heading level={1} data-size="2xl">
              Designsystemet Kitchen Sink
            </Heading>
            <Paragraph data-size="lg">
              A comprehensive demo of all components for testing color combinations
            </Paragraph>
          </div>
          <Switch
            label="Dark mode"
            checked={darkMode}
            onChange={(e) => setDarkMode(e.target.checked)}
          />
        </header>

        <main>
          <ColorCompareDemo />
          <FormDemo />
          <NavigationDemo />
          <FeedbackDemo />
          <DataDisplayDemo />
        </main>
      </div>
    </div>
  )
}

export default App
