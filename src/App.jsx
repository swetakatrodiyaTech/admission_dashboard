import { ThemeProvider } from "./components/context/themecontext";
import AdmissionDashboard from "./components/pages/AdmissionDashboard";

function App() {
  return (
    <div>
      <ThemeProvider>
        <AdmissionDashboard />
      </ThemeProvider>
    </div>
  );
}

export default App;
