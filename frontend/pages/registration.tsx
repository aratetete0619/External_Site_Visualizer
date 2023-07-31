import '../src/styles/App.css';
import Map from '../src/components/Map';
import Toolbutton from '../src/components/Toolbutton';
import MainLayout from '../src/components/layouts/MainLayout';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Sidebar from '../src/components/Sidebar'


const RegistrationPage: React.FC = () => {

  return (
    <ThemeProvider theme={createTheme()}>
      <MainLayout>
        <Sidebar />
        <div className="app">
          <Toolbutton />
          <Map />
        </div>
      </MainLayout>
    </ThemeProvider>
  );
};

export default RegistrationPage;
