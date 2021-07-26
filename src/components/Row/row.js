import React  from "react";
import PropTypes from 'prop-types'
import './row.css'

const Row = ({left, right}) => { 
    return ( 
    <div className ="row mb2">
        <div className = "col-md-6 p-3">
         {left}
        </div>
        <div className = "col-md-6">
          {right}
        </div>
    </div>
);
};

Row.propTyeps ={
  left:PropTypes.node,
  right: PropTypes.node
}

export default Row