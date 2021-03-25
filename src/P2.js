import React, { Component } from "react";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper"
import { withStyles } from "@material-ui/core/styles";
import { Card, CardContent } from "@material-ui/core";


class P2 extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            Dataitem:[]
        }
    }
    Back=()=>
    {
        window.location = "Page1";
    }
    
    
    render()
    {
        const StyledTableCell = withStyles((theme) => ({
            head: {
              backgroundColor: theme.palette.common.black,
              color: theme.palette.common.white,
            },
            body: {
              fontSize: 14,
            },
          }))(TableCell);
        
          const StyledTableRow = withStyles((theme) => ({
            root: {
              "&:nth-of-type(odd)": {
                backgroundColor: theme.palette.action.hover,
              },
            },
          }))(TableRow);
        
        var{isLoaded,Dataitem}=this.state;
        
        return(
            <div className="w1">
                <div className="w2">
                    <div style={{padding:"1em"}}><Typography variant="h5" style={{color:"white"}}>Stockarea</Typography></div>
                    <div className="w22">                    
                        <Avatar alt="David" src="p1.jpeg" style={{width:"1.5em",height:"1.5em"}}/>
                        <div style={{marginLeft:"3em",marginTop:"-1.5em",color:"white"}}><ExpandMoreOutlinedIcon/></div>
                    </div>
                </div>
                <div className="w3">
                    <div className="w4">
                        <Button variant="contained"
                            onClick={this.Back.bind(this)}
                        >Back</Button>
                    </div>
                </div>
                <Container maxWidth="md" style={{backgroundColor:"lavender",padding:"1em"}}>
                    <TableContainer component={Paper} style={{backgroundColor:"lavender"}}>
                        <Table aria-label="customized table">
                            <TableHead align="justify">
                                <Card>
                                <TableRow >                
                                    <StyledTableCell align="center">Name</StyledTableCell>
                                    <StyledTableCell align="center" style={{paddingLeft:"27em"}}>City</StyledTableCell>
                                    <StyledTableCell align="center" style={{paddingLeft:"27em"}}>Code</StyledTableCell>
                                    <StyledTableCell align="center" style={{paddingLeft:"27em"}}>ID</StyledTableCell>
                                    <StyledTableCell align="center" style={{paddingLeft:"27em"}}>space_available</StyledTableCell>
                                    <StyledTableCell align="center" style={{paddingLeft:"27em"}}>type</StyledTableCell>
                                    <StyledTableCell align="center" style={{paddingLeft:"27em"}}>Cluster</StyledTableCell>
                                    <StyledTableCell align="center" style={{paddingLeft:"27em"}}>is_registered</StyledTableCell>
                                    <StyledTableCell align="center" style={{paddingLeft:"27em"}}>is_live</StyledTableCell>
                                </TableRow>
                                </Card>
                            </TableHead>
                            <TableBody align="justify">
                                {Dataitem.map((ag, index) => (
                                <Card style={{marginTop:"1em"}}>
                                    <TableRow >
                                        <StyledTableCell 
                                            style={{ cursor: "pointer", color: "blue" }}
                                        >
                                            {ag.name}
                                        </StyledTableCell>
                                        <StyledTableCell align="justify" style={{paddingLeft:"22em"}}>
                                            {ag.city}
                                        </StyledTableCell>
                                        <StyledTableCell align="justify" style={{paddingLeft:"22em"}}>
                                            {ag.code}
                                        </StyledTableCell>
                                        <StyledTableCell align="justify" style={{paddingLeft:"22em"}}>
                                            {ag.id}
                                        </StyledTableCell>
                                        <StyledTableCell align="justify" style={{paddingLeft:"22em"}}>
                                            {ag.cspace_available}
                                        </StyledTableCell>
                                        <StyledTableCell align="justify" style={{paddingLeft:"22em"}}>
                                            {ag.type}
                                        </StyledTableCell>
                                        
                                        <StyledTableCell style={{paddingLeft:"21em"}}>
                                            {ag.cluster}
                                        </StyledTableCell>
                                        <StyledTableCell style={{paddingLeft:"21em"}}>
                                            {ag.is_registered}
                                        </StyledTableCell>
                                        <StyledTableCell style={{paddingLeft:"21em"}}>
                                            {ag.is_live}
                                        </StyledTableCell>
                                        
                                    </TableRow>
                                </Card>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Container>
                
            </div>

        )
    }
}
export default P2;
