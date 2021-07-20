import React, {Component} from "react";
import Spiner from "../spiner";
import ErrorIndicator from "../error-indicator";

const withData = (View, getData) => {
    return class extends Component{
  
    state = {
        data:[],
        loading: true
    }
  
    componentDidMount() {
        getData().then((data) => {
              this.setState({
                data,
                loading:false
              });
          });
      }
  
      render (){
      const {data} = this.state
        if (this.state.loading){
          return <Spiner/>
      }
      return <View {...this.props} data ={data}/>
      }
    };
  }
  export  {withData};