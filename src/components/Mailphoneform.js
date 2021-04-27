import React from "react";

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action=""
        method="post"
        encType="multipart/form-data"        
      >
      <div className="form">
          <div>
            <label className="sr-only" htmlFor="your-name">Имя пользователя</label>
            <input type="text" className="form-control mb-2" id="your-name" placeholder="Ваше имя" name="first_name" required/>      
          </div>
          <div>
            <label className="sr-only" htmlFor="your-email">Email</label>
            <div className="input-group mb-2">
              <div className="input-group-prepend">
                <div className="input-group-text">@</div>
              </div>
              <input type="email" className="form-control" id="your-email" placeholder="Ваша почта" name="email" required />
            </div>
          </div>
          <div>
            <label className="sr-only" htmlFor="phone">Телефон</label>
            <div className="input-group mb-2">
              <div className="input-group-prepend">
                <div className="input-group-text">&#9990;</div>
              </div>
              <input type="tel" className="form-control" id="phone" placeholder="Ваш телефон" required pattern="^((8|\+7)[\-]?)?(\(?\d{3}\)?[\-]?)?[\d\-]{7,10}$" title="+79261234567" name="phone" />
            </div>
          </div>
          <div>
            <label className="sr-only" htmlFor="application">Заявка</label>
            <div className="input-group mb-2">         
              <textarea className="form-control" id="application" placeholder="Заявка" name="comments" maxLength="200" 
              rows="4"></textarea>
            </div>
          </div>
          <div>
            <label className="sr-only" htmlFor="file">Загрузить файлы</label>
            <div className="input-group mb-2">         
              <input type="file" className="form-control" id="file" name="file-1"/>
            </div>
          </div> 
          <div className="text-left">          
          {status === "SUCCESS" ? <p>Спасибо, мы вам перезвоним!</p> : <button type="submit" className="btn btn-primary mb-2" name="submit">Отправить</button>}
          {status === "ERROR" && <p>Ошибка</p>}         
          </div>  
       </div>      
      </form>      
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}