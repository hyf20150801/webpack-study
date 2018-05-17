import 

export default{
  data(){
    return{
      author:"huang"
    }
  },
  render(){
    return(
      <div id="footer">
        <span>Writter by {this.author}</span>
      </div>
    )
  }
}