const heading = React.createElement("h1", //h1 is a react element (js object)
    { id: "header" }, //attribute to h1
    "hello world from React!") //child 
    //attribute and child are props

console.log(heading); //it return object becoz in react h1 is not a tag its a js object

const root = ReactDOM.createRoot(document.getElementById("container"))

root.render(heading) //render is a method which converts js object to h1 tag and put over on root
