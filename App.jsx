import { useState } from 'react'
import Layout from './components/layout/Layout'
import Analytics from './pages/Analytics'
import CampusMap from './pages/CampusMap'
import CarbonCalculator from './pages/CarbonCalculator'
import Dashboard from './pages/Dashboard'
import Leaderboard from './pages/Leaderboard'
import ReductionGoals from './pages/ReductionGoals'
import Reports from './pages/Reports'
import SmartInsights from './pages/SmartInsights'
import { CarbonDataProvider } from './context/CarbonDataContext'
import { ThemeProvider } from './context/ThemeProvider'

// The selected sidebar item decides which page component is shown.
const pages = {
  dashboard: Dashboard,
  calculator: CarbonCalculator,
  analytics: Analytics,
  map: CampusMap,
  insights: SmartInsights,
  goals: ReductionGoals,
  leaderboard: Leaderboard,
  reports: Reports,
}

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard')
  const Page = pages[currentPage] ?? Dashboard

  return (
    <ThemeProvider>
      <CarbonDataProvider>
        <Layout currentPage={currentPage} onNavigate={setCurrentPage}>
          <Page onNavigate={setCurrentPage} />
        </Layout>
      </CarbonDataProvider>
    </ThemeProvider>
  )
}

export default App
