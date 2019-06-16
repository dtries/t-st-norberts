import React, { Component} from 'react';
import './App.css';
import { Collapsible, CollapsibleItem, Navbar, Table } from 'react-materialize';
import TableBody from "./components/TableBody/tablebody";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list1: [{point: "Ties to Wisconsin and Upper Midwest"}, {point: "Family"}],
      list2: [{point: "Collaborative Approach Preferred, Multidimensional as Apropos"}, {point: "Team Building and Staff Development"}],
      list3: [{point: "Generated All Financial Statements and Provided Analysis for External and Internal Reporting"}, {point: "Forecasted Impact of New Accounting Pronouncements"}, {point: "Prepared Financial Information for External Surveys"}],
      list4: [{point: "Managed Payments for Leased Properties for Target Corporation"}, {point: "Acted as Delegated Authority for Contract Approval for State Controller"}, {point: "Verified State Capital Appropriations Complied with State Statutes"}],
      list5: [{point: "Reported Investment Activity to Board of Trustees"}, {point: "Chaired the Defined Contribution Plan Investment Committee"}, {point: "Allocated Spending Authorization and Monitored Compliance"}],
      list6: [{point: "Designed and Implemented Administrative Shared Services"}, {point: "Established Change Agent Network"}],
      list7: [{point: "Managed Budget, Forecast, and Requests"}, {point: "Oversaw Expenditure Compliance and Allowability"}, {point: "Enacted Deficit Account Resolution"}],
      list8: [{point: "Designed Financial Operations Websites"}, {point: "Led Function and Testing of Financial and HR Data Systems"}, {point: "Implemented New Travel and Expense Management System"}],
      list9: [{point: "Developed, Revised, and Enforced University Fiscal Policy and Procedures"}, {point: "Ensured University Compliance with Laws and Regulations"}, {point: "Mitigated Risk through Policy and Insurance Review"}],
      list10: [{point: "World Class Liberal Arts Institution"}, {point: "Development of the Whole Person"}, {point: "Value Tradition While Forward Thinking"}]
    };
  }

  render() {

  return (
    <div className="App">
      <Navbar brand={                    
        <span className="brand">
          Tressa Ries
        </span>  
        } 
        fixed={true}
        centerLogo={true}
        // { ... 'right'}
        >
      </Navbar>
      <div style={{ position: "absolute"}}>
        <br />
      </div>
      <div className="container">     
        <Collapsible popout>
            <CollapsibleItem header="Hello" icon="done_outline">
              <Table className="table_class">
                {this.state.list1.map((listInfo, index) => 
                  <TableBody
                    key = {index}
                    listItem = {listInfo.point}
                  />
                )}
              </Table>            
            </CollapsibleItem>
            <CollapsibleItem header="Leadership" icon="done_outline">
              <Table className="table_class">
                {this.state.list2.map((listInfo, index) => 
                  <TableBody
                    key = {index}
                    listItem = {listInfo.point}
                  />
                )}
              </Table>
            </CollapsibleItem>
            <CollapsibleItem header="Institutional Accounting & Financial Reporting" icon="done_outline">
             <Table className="table_class">
                {this.state.list3.map((listInfo, index) => 
                  <TableBody
                    key = {index}
                    listItem = {listInfo.point}
                  />
                )}
              </Table>
            </CollapsibleItem>
            <CollapsibleItem header="Property, Facilities, & Construction Management" icon="done_outline">
              <Table className="table_class">
                {this.state.list4.map((listInfo, index) => 
                  <TableBody
                    key = {index}
                    listItem = {listInfo.point}
                  />
                )}
              </Table>
            </CollapsibleItem>
            <CollapsibleItem header="Investment & Endowment Management" icon="done_outline">
              <Table className="table_class">
                {this.state.list5.map((listInfo, index) => 
                  <TableBody
                    key = {index}
                    listItem = {listInfo.point}
                  />
                )}
              </Table>         
            </CollapsibleItem>
            <CollapsibleItem header="Administrative Services" icon="done_outline">
              <Table className="table_class">
                {this.state.list6.map((listInfo, index) => 
                  <TableBody
                    key = {index}
                    listItem = {listInfo.point}
                  />
                )}
              </Table>          
            </CollapsibleItem>
            <CollapsibleItem header="Budget & Appropriations" icon="done_outline">
              <Table className="table_class">
                {this.state.list7.map((listInfo, index) => 
                  <TableBody
                    key = {index}
                    listItem = {listInfo.point}
                  />
                )}
              </Table>
            </CollapsibleItem>
            <CollapsibleItem header="Information Systems Administration" icon="done_outline">
              <Table className="table_class">
                {this.state.list8.map((listInfo, index) => 
                  <TableBody
                    key = {index}
                    listItem = {listInfo.point}
                  />
                )}
              </Table>         
            </CollapsibleItem>
            <CollapsibleItem header="Policy, Compliance, & Risk Management" icon="done_outline">
              <Table className="table_class">
                {this.state.list9.map((listInfo, index) => 
                  <TableBody
                    key = {index}
                    listItem = {listInfo.point}
                  />
                )}
              </Table> 
            </CollapsibleItem>
            <CollapsibleItem header="Why St. Norbert College" icon="done_outline">
              <Table className="table_class">
                {this.state.list10.map((listInfo, index) => 
                  <TableBody
                    key = {index}
                    listItem = {listInfo.point}
                  />
                )}
              </Table>
            </CollapsibleItem>
        </Collapsible>
      </div>
    </div>
  );
}
}

export default App;
