import './App.css';
import Header from "./Header/Header";
import Form from "./Form/Form";
import Preview from "./Preview/Preview";
import {connect} from "react-redux";


function App({page,saved,profile}) {

    return (
        <div className="App">
                <Header/>
                {page==='Form'?
                    <Form/>:
                    <Preview saved={saved} profile={profile}/>
                }
        </div>
    );
}
const mapStateToProps = (state) => {
  return{
      page:state.page,
      saved:state.saved,
      profile:state.profile
  }
}
export default connect(mapStateToProps,{})(App);
