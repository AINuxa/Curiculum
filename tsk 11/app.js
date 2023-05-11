const messages = [
    { sender: 'Sedish', receiver: 'Metish', hasRead: true },
    { sender: 'Metish', receiver: 'Sedish', hasRead: true },
    { sender: 'Aftandil', receiver: 'Hadi', hasRead: false },
    { sender: 'Hadi', receiver: 'Aftandil', hasRead: false },
    { sender: 'Seva', receiver: 'Lale', hasRead: true }
  ];

  function getReadMessages(arr) {
    return arr.filter(message => message.hasRead === true);
  }

  const messageList = document.getElementById('message-list');

  const readMessages = getReadMessages(messages);

  readMessages.forEach(message => {
    const li = document.createElement('li');
    li.textContent = `From: ${message.sender}, To: ${message.receiver}`;
    messageList.appendChild(li);
  });