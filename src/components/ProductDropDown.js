import { Component } from "react";

class ProductDropDown extends Component{

    state = {
        teams: [],
        selectedTeam: "",
        validationError: ""
      };
    componentDidMount() {
        fetch("http://localhost:8082/api/v1/products")
        .then(response => {
            return response.json();
        })
        .then(data => {
            let teamsFromApi = data.DATA.map(team => {
                return { value: team.productId, display: team.productName };
            });
            this.setState({
              teams: [
                {
                  value: "",
                  display:
                    "(Select a product)"
                }
              ].concat(teamsFromApi)
            });
        })
        .catch(error => {
            console.log(error);
        });
    }

    

    render() {
        return (
          <div>
            <select
              value={this.state.selectedTeam}
              onChange={e =>
                this.setState({
                  selectedTeam: e.target.value
                })}>
              {this.state.teams.map(team => (
                <option key={team.value} value={team.value}>
                  {team.display}
                </option>
              ))}
            </select>
            <div style={{ color: "red", marginTop: "5px" }}>
              {this.state.validationError}
            </div>
          </div>
        );
      }
}

export default ProductDropDown;