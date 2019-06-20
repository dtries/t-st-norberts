import React, { Component} from 'react';
import './App.css';
import { Collapsible, CollapsibleItem, Navbar, NavItem, Table } from 'react-materialize';
import TableBody from "./components/TableBody/tablebody";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list1: [{point: "Ties to Wisconsin and Upper Midwest"}, {point: "Family"}],
      list2: [{point: "Collaborative Approach Preferred, Multidimensional as Apropos"}, {point: "Team Building and Staff Development"}],
      list3: [{point: "Generated All Financial Statements and Provided Analysis for External and Internal Reporting"}, {point: "Forecasted Impact of New Accounting Pronouncements"}, {point: "Prepared Financial Information for External Surveys"}],
      list4: [{point: "Managed Payments for Leased Properties for Target Corporation"}, {point: "Acted as Delegated Authority for Contract Approval for State Controller"}, {point: "Oversaw Cash Flow for Capital Construction Projects"}],
      list5: [{point: "Reported Investment Activity to Board of Trustees"}, {point: "Chaired the Defined Contribution Plan Investment Committee"}, {point: "Allocated Spending Authorization and Monitored Compliance"}],
      list6: [{point: "Designed and Implemented Administrative Shared Services"}, {point: "Established Change Agent Network"}],
      list7: [{point: "Managed Budget, Forecast, and Requests"}, {point: "Oversaw Expenditure Compliance and Allowability"}, {point: "Enacted Deficit Account Resolution"}],
      list8: [{point: "Ensured Compliance with Employment Related Laws and Regulations"}, {point: "Managed Financial Aspects of Benefit Plans"}, {point: "Led Onboarding Activities for New Hires"}],
      list9: [{point: "Developed, Revised, and Enforced University Fiscal Policy and Procedures"}, {point: "Engineered Enterprise Risk Management Structure, Process, and Implementation"}, {point: "Mitigated Risk through Policy and Insurance Review"}],
      list10: [{point: "World Class Liberal Arts Institution"}, {point: "Development of the Whole Person"}, {point: "Value Tradition While Forward Thinking"}],
      list11: [{point: "Developed Rates for Labs and Conference Space"}, {point: "Ensured Rates were Fair and Competitive"}]
    };
  }

  render() {

  return (
    <div className="App">
      <Navbar brand={ 
                  
        <span className="brand" id="snc-logo">
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Tressa Ries
        </span>  
        } 
        fixed={true}
        centerLogo={true}>
        {/* <span
        className="snc-logo">
          &nbsp;
        </span> */}
       </Navbar>
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
            <CollapsibleItem header="Auxiliary Services" icon="done_outline">
              <Table className="table_class">
                {this.state.list11.map((listInfo, index) => 
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
            <CollapsibleItem header="Human Resources" icon="done_outline">
              <Table className="table_class">
                {this.state.list8.map((listInfo, index) => 
                  <TableBody
                    key = {index}
                    listItem = {listInfo.point}
                  />
                )}
              </Table>         
            </CollapsibleItem>
            <CollapsibleItem header="Budget" icon="done_outline">
              <Table className="table_class">
                {this.state.list7.map((listInfo, index) => 
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
