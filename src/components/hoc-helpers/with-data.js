import React, {Component} from "react";
import Spiner from "../spiner";
import ErrorIndicator from "../error-indicator";

const withData = (View) => {
    return class extends Component{
  
    state = {
        data:[],
        loading: true,
        error: false
    }
    componentDidUpdate(prevProps) {
      if(this.props.getData !== prevProps.getData){
        this.update();
      }
    }
    componentDidMount() {
        this.update();
      }
    update(){
      this.setState({
        loading: true
      })
      this.props.getData().then((data) => {
          this.setState({
            data,
            loading:false
          })
        }).catch(()=>{
          this.setState({
            error: true,
            loading:false
          })
    });
    }

      render (){
      const {data, loading, error} = this.state

      if (loading){
          return <Spiner/>
      }
      if (error){
        <ErrorIndicator/>
      }
      
      return <View {...this.props} data ={data}/>
      }
    };
  }
  export  {withData};