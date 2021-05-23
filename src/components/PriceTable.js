import { Component } from "react";

class PriceTable extends Component{

    constructor(props) {
        super(props);
        this.state = {
            productId: '1',
            teams: []
        };
    }
    
    componentDidMount() {
        fetch("http://localhost:8082/api/v1/product/prices/"+this.state.productId)
        .then(response => {
            return response.json();
        })
        .then(data => {
            let teamsFromApi = data.DATA.map(team => {
                return { requestedQty: team.requestedQty, amount: team.amount };
            });
            this.setState({
              teams: teamsFromApi
            });
        })
        .catch(error => {
            console.log(error);
        });
    }

    render(){
        return (
            <table>
                <thead>
                    <th>Quantity</th>
                    <th>Price</th>
                </thead>
                <tbody>
                {this.state.teams.map(team => (
                    <tr key={team.value}>
                <td>{team.requestedQty}</td>
                <td>{team.amount}</td></tr>
                ))}
                </tbody>
            </table>
        );
    }
}

export default PriceTable;