import { useState } from 'react';

function useTabs(props) {
  const [activeTab, setActiveTab] = useState(0);
  
  function handleTabChange(event, value) {
    setActiveTab(value);
  }
  
  function handleChangeIndex(index) {
    setActiveTab(index);
  }
  
  return {
    activeTab,
    handleTabChange,
    handleChangeIndex
  }
}

export default useTabs;
