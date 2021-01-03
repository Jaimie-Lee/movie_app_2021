import React from 'react';
import PropTypes from 'prop-types';


const foodILike = [
  {
    id:1,
    name: "banana",
    image: "https://www.google.com/search?q=banana&sxsrf=ALeKk00etIKH5T-uH6MY4BZUVmB4u8KcKg:1609638397984&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjTtban0v7tAhVGFVkFHXLNCSAQ_AUoAXoECBMQAw&biw=1036&bih=968#imgrc=l-xjqYxEGNZh1M",
    rating:5
  },
  {
    id:2,
    name: "mango",
    image: "https://www.google.com/search?q=mango&tbm=isch&ved=2ahUKEwii7LOo0v7tAhURIK0KHd9wAugQ2-cCegQIABAA&oq=mango&gs_lcp=CgNpbWcQAzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6BwgjEOoCECc6BAgjECdQ4MsEWLbgBGCV4wRoAXAAeACAAVCIAewCkgEBNZgBAKABAaoBC2d3cy13aXotaW1nsAEKwAEB&sclient=img&ei=ACLxX6LsAZHAtAXf4YnADg&bih=968&biw=1036#imgrc=AGpPMB8I0xGCQM",
    rating:4.9
  },
  {
    id:3,
    name: "melon",
    image: "https://www.google.com/search?q=melon&tbm=isch&ved=2ahUKEwjcpazO0v7tAhUHNKwKHWOnA94Q2-cCegQIABAA&oq=melon&gs_lcp=CgNpbWcQAzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6BAgjECdQsfoFWNuRBmDIkwZoAHAAeACAAV-IAecEkgEBOJgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=TyLxX5zCJIfosAXjzo7wDQ&bih=968&biw=1036#imgrc=BD7OirliHTVv4M",
    rating:4.8
  }
];


function Food({name, picture, rating }) {
  return <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name} />
  </div>
}

Food.propTypes = {
  name:PropTypes.string.isRequired,
  picture:PropTypes.string.isRequired,
  rating:PropTypes.number.isRequired
};

function App() {
  return (
    <div>   
      {foodILike.map(dish => (
        <Food 
        key={dish.id} 
        name={dish.name} 
        picture={dish.image} 
        rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
