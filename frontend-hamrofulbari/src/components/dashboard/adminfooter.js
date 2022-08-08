import React, { Component } from 'react';

class AdminFooter extends Component{
render(){
     
    return(     
        <footer className="footer">
                <div className="d-sm-flex justify-content-center justify-content-sm-between">
                    <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">
                        Copyright © 2022 Hamrofulbari plants and flowers Store Shopping.</span>
                    <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
                        Admin Panel | Hamro Fulbari</span>
                </div>
        </footer>
    );
  }
}
export default AdminFooter;