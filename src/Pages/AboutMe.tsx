// import './js/ejemplo.js'
import {ejemplo} from "./js/ejemplo.js";

const AboutMe = () => {

  const click = (  ) => {
    console.log(ejemplo);
    
  }
  return (
    <div>
      <button className='btn btn-sm btn-danger' onClick={click}>click</button>
    </div>
  )
}

export default AboutMe