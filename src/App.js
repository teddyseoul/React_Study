import React, { Component } from "react";
import IterationSample from "./IterationSample";

// import ScrollBox from "./ScrollBox";
// import ValidationSample from "./ValidationSample";
// import EventPractice from "./EventPractice";
// import Say from "./Say";
// import Counter from "./Counter";
// import MyComponent from "./MyComponent";

//const App = () => {
// return (
//   <MyComponent name={"React"} favoriteNumber={1}>
//     리액트
//   </MyComponent>
// );

//   return <Counter />;
// return <Say />;
// return <EventPractice />;
//};

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <ScrollBox ref={ref => (this.scrollBox = ref)} />
//         <button onClick={() => this.scrollBox.scrollToBottom()}>
//           맨 밑으로
//         </button>
//       </div>
//     );
//     // return <ValidationSample />;
//   }
// }

class App extends Component {
  render() {
    return <IterationSample />;
  }
}
export default App;
