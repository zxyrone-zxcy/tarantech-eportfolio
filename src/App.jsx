import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import MemberLayout from './pages/MemberLayout'
import PerformanceTasks from './pages/PerformanceTasks'
import QuizzesExams from './pages/QuizzesExams'
import Reflection from './pages/Reflection'

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/members/:memberId" element={<MemberLayout />}>
            <Route index element={<Navigate to="performance-tasks" replace />} />
            <Route path="performance-tasks" element={<PerformanceTasks />} />
            <Route path="quizzes" element={<QuizzesExams />} />
            <Route path="reflection" element={<Reflection />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
