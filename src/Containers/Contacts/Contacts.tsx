import React from 'react';

const Contacts = () => {
  return (
    <div className="contacts container-fluid">
      <p className="text-1">Добро пожаловать в Справочный центр Twitter</p>
      <p className="text-2">Что мы можем помочь вам найти?</p>

      <input type="text" placeholder="Поиск"/>
    </div>
  );
};

export default Contacts;