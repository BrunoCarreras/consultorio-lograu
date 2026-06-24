import { Layout } from '../components/Layout';
import { specialties } from '../data/site';
import { Home } from '../pages/Home';
import { SpecialtyPage } from '../pages/SpecialtyPage';

export function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  const specialty = specialties.find((item) => item.path === path);
  return <Layout>{specialty ? <SpecialtyPage specialty={specialty} /> : <Home />}</Layout>;
}
