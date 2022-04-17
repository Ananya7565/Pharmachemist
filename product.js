import './App.css';
import React from 'react';
class App extends React.Component
{
 
  state  = {
    products: [
      {
      "_id":1,
      "title": "medicine1",
      "source": "https://cdn.mos.cms.futurecdn.net/JNcdr4XQV5nZoVVGgS8yRn-320-80.jpg",
      "description": "eCommerce website heart medicine",
      "content": "something about heart medicine and stuff. something about heart medicine and stuff. something about heart medicine and stuff. something about heart medicine and stuff. ",
      "price": 1200,
      "count": 1
     },

     {
      "_id":2,
      "title": "medicine2",
      "source": "https://cdn.mos.cms.futurecdn.net/JNcdr4XQV5nZoVVGgS8yRn-320-80.jpg",
      "description": "eCommerce website heart medicine",
      "content": "something about heart medicine and stuff. something about heart medicine and stuff. something about heart medicine and stuff. something about heart medicine and stuff. ",
      "price": 1200,
      "count": 2
     },

     {
      "_id":3,
      "title": "medicine1",
      "source": "https://cdn.mos.cms.futurecdn.net/JNcdr4XQV5nZoVVGgS8yRn-320-80.jpg",
      "description": "eCommerce website heart medicine",
      "content": "something about heart medicine and stuff. something about heart medicine and stuff. something about heart medicine and stuff. something about heart medicine and stuff. ",
      "price": 1200,
      "count": 3
     },

     {
      "_id":3,
      "title": "medicine1",
      "source": "https://cdn.mos.cms.futurecdn.net/JNcdr4XQV5nZoVVGgS8yRn-320-80.jpg",
      "description": "eCommerce website heart medicine",
      "content": "something about heart medicine and stuff. something about heart medicine and stuff. something about heart medicine and stuff. something about heart medicine and stuff. ",
      "price": 1200,
      "count": 3
     },

     {
      "_id":3,
      "title": "medicine1",
      "source": "https://cdn.mos.cms.futurecdn.net/JNcdr4XQV5nZoVVGgS8yRn-320-80.jpg",
      "description": "eCommerce website heart medicine",
      "content": "something about heart medicine and stuff. something about heart medicine and stuff. something about heart medicine and stuff. something about heart medicine and stuff. ",
      "price": 1200,
      "count": 3
     },

     {
      "_id":3,
      "title": "medicine1",
      "source": "https://cdn.mos.cms.futurecdn.net/JNcdr4XQV5nZoVVGgS8yRn-320-80.jpg",
      "description": "eCommerce website heart medicine",
      "content": "something about heart medicine and stuff. something about heart medicine and stuff. something about heart medicine and stuff. something about heart medicine and stuff. ",
      "price": 1200,
      "count": 3
     },

     {
      "_id":3,
      "title": "medicine1",
      "source": "https://cdn.mos.cms.futurecdn.net/JNcdr4XQV5nZoVVGgS8yRn-320-80.jpg",
      "description": "eCommerce website heart medicine",
      "content": "something about heart medicine and stuff. something about heart medicine and stuff. something about heart medicine and stuff. something about heart medicine and stuff. ",
      "price": 1200,
      "count": 3
     },

     {
      "_id":3,
      "title": "medicine1",
      "source": "https://cdn.mos.cms.futurecdn.net/JNcdr4XQV5nZoVVGgS8yRn-320-80.jpg",
      "description": "eCommerce website heart medicine",
      "content": "something about heart medicine and stuff. something about heart medicine and stuff. something about heart medicine and stuff. something about heart medicine and stuff. ",
      "price": 1200,
      "count": 3
     },

     {
      "_id":3,
      "title": "medicine1",
      "source": "https://cdn.mos.cms.futurecdn.net/JNcdr4XQV5nZoVVGgS8yRn-320-80.jpg",
      "description": "eCommerce website heart medicine",
      "content": "something about heart medicine and stuff. something about heart medicine and stuff. something about heart medicine and stuff. something about heart medicine and stuff. ",
      "price": 1200,
      "count": 3
     },

     {
      "_id":3,
      "title": "medicine1",
      "source": "https://cdn.mos.cms.futurecdn.net/JNcdr4XQV5nZoVVGgS8yRn-320-80.jpg",
      "description": "eCommerce website heart medicine",
      "content": "something about heart medicine and stuff. something about heart medicine and stuff. something about heart medicine and stuff. something about heart medicine and stuff. ",
      "price": 1200,
      "count": 3
     }
   ]
  }

  handleBill = ()=>{
    var sum = 0;
    var arr= [1200, 1090, 1267, 134]
    for (let i in arr)
    {
        let a = arr[i];
        if (a[2] !== 0)
        {
            sum = sum + a[i];
            return sum;
        }
    }  
}
  render(){
    const {products} = this.state;
    return(
      <div className="app">
        {
           products.map(item => (
          <div className="details"  key={item._id}>
            <div className="big-img">
              <img src={item.source}/>
            </div>

            <div className="box">
            <div className="row">
              <h2> {item.title} </h2>
              <span> Rs.{item.price} </span>
            </div>
              <button className="cart"> Add to Cart </button>
            </div >
            <div className="desc">
            <p> {item.description} </p>
            <p> {item.content} </p>
            </div>
          </div>
        ))
      }
      <div className="bill">
    <h2> Total Bill: &#8377; {this.handleBill()}</h2>
     </div>
    </div>
    );
  };
}


export default App;
