import React from 'react';

const AppHeader = ({importanted, allPosts}) => {
  return (
    <div className="app-header d-flex">
      <h1>Работник Иван Иваныч</h1>
      <h2>{allPosts} задачи, из них выполнено {importanted}</h2>
    </div>
  )
}

export default AppHeader; 