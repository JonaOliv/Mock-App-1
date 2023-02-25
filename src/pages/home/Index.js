import NavigatorBar from '../../components/NavigatorBar';
import { Component } from 'react';

class Home extends Component {
  render(){
    return (
      <div>
        <NavigatorBar/>
        <img src={process.env.PUBLIC_URL + '/img/World-Earth-Space-Cyber-Network-Map-Hd-Wallpaper-7280995.jpg'} className='img-fluid shadow-4' alt='...' 
        style={{
          width: '100%'
        }}
        />
      </div>
    );
  }
}
  
export default Home;