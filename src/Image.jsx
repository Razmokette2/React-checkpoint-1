import product from './product';
import img from "./watch.jpg";
const Image = () => {
  return <img src={img} alt={product.name} style={{ width: '150px', borderRadius: '8px' }} />;
};

export default Image;
