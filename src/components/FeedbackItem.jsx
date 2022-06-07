import Card from "./shared/Card";
import Proptypes from "prop-types"
import {FaTimes}from 'react-icons/fa'
function FeedbackItem({ item, handleDelete }) {
  
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close">
        <FaTimes onClick={()=> handleDelete(item.id)} color="purple"></FaTimes>
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}
FeedbackItem.propTypes={
  item:Proptypes.object.isRequired,
  
}

export default FeedbackItem;
