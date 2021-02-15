import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// function NewBeer(props) {

    
//     let [newBeerDets, setNewBeerDets] = useState({
//                     name: '',
//                     tagline: '',
//                     description: '',
//                     first_brewed: '',
//                     brewers_tips: '',
//                     attenuation_level: '',
//                     contributed_by: '',
//                     image_url: '',
//                 })
  
//     useEffect(() => {
//         axios.post(`https://ih-beers-api2.herokuapp.com/beers/new`, newBeerDets)
//         .then(response => this.setNewBeerDets({newBeerID: response.data.id}))
//             });
//     }

// // class NewBeer extends Component {
// //     contructor() {
// //         super();
// //         this.state = {
// //             name: '',
// //             tagline: '',
// //             description: '',
// //             first_brewed: '',
// //             brewers_tips: '',
// //             attenuation_level: '',
// //             contributed_by: '',
// //             image_url: '',
// //         };
// //     }

//     const onChange = (e) => {
//         this.setState({ [e.target.name]: e.target.value});
//     }

//         const { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by, image_url } = this.state;
//         return (
//             <div className="newBeer">
//        <Link to="./">
//          <header>
//            <img src="./images/home-icon.png" width="50" alt="little home icon" />
//          </header>
//        </Link>

//        <h3>Add New Beer to Database</h3>

//        <form>
//          <label>Beer Name</label>
//             <input type="text" size="30" name="name" value={name} onChange={this.onChange}/>
        
//          <label>Tagline</label>
//            <input type="text" size="30" name="tagline" value={tagline} onChange={this.onChange} />
        
//          <label>Description</label>
//            <textarea name="description" wrap="soft" value={description} onChange={this.onChange}></textarea>
        
//          <label>First Brewed</label>
//            <input type="text" size="30" name="first_brewed" value={first_brewed} onChange={this.onChange} />
        
//          <label>Brewer's Tips</label>
//            <input type="text" size="30" name="brewers_tips" value={brewers_tips} onChange={this.onChange}/>
        
       
//          <label>Attenuation Level</label>
          
//            <input type="number" size="30" name="attentuation_level" value={attenuation_level} onChange={this.onChange}/>
        
//          <label>Contributed By</label>
//            <input type="text" size="30" name="contributed_by" value={contributed_by} onChange={this.onChange}/>
        
//          <label>URL of Beer Photo</label>
//            <input type="url" size="30" name="image_url" value={image_url} onChange={this.onChange}/>
        
//            <input className="submitButton" type="submit" value="Submit" />
//        </form>
//      </div>
//         );
    


function NewBeer(props) {

    // componentDidMount() {
    //     // POST request using axios with error handling
    //     const newBeerToPost = { title: 'React POST Request Example' };
    //     axios.post('https://reqres.in/invalid-url', newBeerToPost)
    //         .then(response => this.setState({ articleId: response.data.id }))
    //         .catch(error => {
    //             this.setState({ errorMessage: error.message });
    //             console.error('There was an error!', error);
    //         });
    // }
// function handleSubmit () {

// }
  return (
    <div className="newBeer">
      <Link to="./">
        <header>
          <img src="./images/home-icon.png" width="50" alt="little home icon" />
        </header>
      </Link>

      <h3>Add New Beer to Database</h3>

      <form>
        <label>Beer Name</label>
           <input type="text" size="30" name="name" />
        
        <label>Tagline</label>
          <input type="text" size="30" name="tagline" />
        
        <label>Description</label>
          <textarea name="description" wrap="soft" ></textarea>
        
        <label>First Brewed</label>
          <input type="text" size="30" name="first_brewed" />
        
        <label>Brewer's Tips</label>
          <input type="text" size="30" name="brewers_tips" />
        
       
        <label>Attenuation Level</label>
          
          <input type="number" size="30" name="attentuation_level" />
        
        <label>Contributed By</label>
          <input type="text" size="30" name="contributed_by" />
        
        <label>URL of Beer Photo</label>
          <input type="url" size="30" name="image_url" />
        
          <input className="submitButton" type="submit" value="Submit" />
      </form>
    </div>
  );
}
        
export default NewBeer;
