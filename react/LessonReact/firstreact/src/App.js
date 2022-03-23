import { useEffect, useState } from 'react';

let id = 0

function App() {

  const [messageList, setMessageList] = useState([]);

  const handleChange = (event) => {
    event.preventDefault();
    const target = event.target;
    const author = target.author.value;
    const text = target.text.value;

    setMessageList(prev => [...prev, {
      id: id++,
      author: author,
      text: text,
    }])
  } 

  function giveLastAutor(array) {
    return array.length ? array[array.length - 1].id + 1 : 0;
}

useEffect( () => {
    setTimeout( () => {
        botAnswer(messageList);
    }, 1500 );
}, [messageList] );

function botAnswer() {
    const lastAuthor = messageList[messageList.length - 1];
    if (lastAuthor && lastAuthor.author) {
        setMessageList(prev => [...prev, {
            id: giveLastAutor(prev),
            text: `${lastAuthor.author} Ваше сообщение записано`,
        }]);
    }
}
    return (
        <div className="App">
            <div className="">
                <form onSubmit={handleChange} className="form">
                    <label className="form__label">
                        <span className="form__span">Имя:</span>
                        <input className="form__input" type="text" name="author"/>
                    </label>
                    <label className="form__label">
                        <span className="form__span">Сообщение:</span>
                        <input className="form__input" type="textarea" name="text"/>
                    </label>
                    <input className="form__button" type="submit" value="Отправить"/>
                </form>
                <div className="message-list">
                    {messageList.map( message => <div className="message-list__item" key={id}>
                        { message.author && <p className="message-list__p"><span>Автор:</span> {message.author}</p>}
                        <p className="message-list__p">{ message.author && <span>Текст:</span>} {message.text}</p>
                    </div> )}
                </div>
            </div>
        </div>
    );

}

export default App;
