"use strict";



var females = BABYNAMES.filter(function(record){
    return "F" == record.sex;
});
console.log(females.length);

var females = BABYNAMES.filter(record => "F" == record.sex);
console.log(females.length);

var topFemNames = females.sort((rec1, rec2) => rec2.count - rec1.count).slice(0,100);
console.log(topFemNames.length);

//main application React component
class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var colMeta = {
            count: {
                type: columnTypes.numeric, 
                caption: "Num of Babies"
            }
        }
        return (
            <div className="container">
                <h1>Most Popular Female Baby Names from 1996!</h1>
                <DataTable records={this.props.records} 
                    columnMeta={colMeta}/>
            </div>
        );
    }
}

// Array.map returns something
// Array.forEach might get ignored. 
    // render() {
    //     return (
    //         <div className="container">
    //             <h1>Most Popular Female Baby Names from 1996!</h1>
    //             <ul>
    //                 <li>{this.props.records.length}</li>
    //                 {
    //                     this.props.records.map(record => <li key={record.name}>{record.name} {record.count}</li>)
    //                 }
    //             </ul>
    //         </div>
    //     );
    // }
//render the App component to the element with id="app"
ReactDOM.render(<App records={topFemNames}/>, document.getElementById("app"));
