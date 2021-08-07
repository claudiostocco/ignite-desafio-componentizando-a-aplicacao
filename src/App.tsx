import { useState } from 'react';
import './styles/global.scss';
import { Content } from './components/Content';
import { SideBar } from './components/SideBar';
import { useCallback } from 'react';

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  const handleClickButton = useCallback((id: number) => {
    setSelectedGenreId(id);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar selectedGenreId={selectedGenreId} handleClickButton={handleClickButton}/>
      <Content selectedGenreId={selectedGenreId}/>
    </div>
  )
}