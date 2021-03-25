import React, { Component } from "react";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Card, CardContent } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import Axios from 'axios';
import AppBar from '@material-ui/core/AppBar';
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import TextField from '@material-ui/core/TextField';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper"
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputAdornment from '@material-ui/core/InputAdornment';


class Page1 extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            warehouse:[],
            Dataitem:[],
            name:"",
            city:"",
            space_available:"",
            cluster:"",
            is_live:"",
            name1:"",
            city1:"",
            cluster1:"",
            space:""
        }
        this.handleOpenDialog = this.handleOpenDialog.bind(this);
        this.handleCloseDialog = this.handleCloseDialog.bind(this);
    }
    
    
    componentWillMount()
    {
        Axios.get('http://localhost:9090/examples/warehousedisplay.jsp',{}).then(response=>
        {
        console.log(response.data);
        this.setState({Dataitem:response.data})
        }).catch(err=>{
            console.log("Failed");
        })
    }
    update = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
        console.log(this.state, "formField")
    }

    
    handleData = (value) => {
        let data = this.state.Dataitem;
        let data1 = data[value];
        console.log(data1);
        this.setState({ openDialog: true, warehouse: data[value] });
        console.log(this.state.warehouse);
    };
    handleOpenDialog() {
        this.setState({
          openDialog: true,
        });
    }
    
    handleCloseDialog(ev) {

            const name = this.state.name
            const city = this.state.city
            const space_available = this.state.space_available
            const cluster = this.state.cluster
            const is_live = this.state.is_live
            const data = { name, city, space_available, cluster, is_live }
        
            Axios.get('http://localhost:9090/examples/updatewarehouse.jsp', { params: data }).then(response => {
                console.log(response);
                this.setState({message:response.data.response})
            }).catch(err => {
                console.log("Failed-update");
            })
        this.setState({
          openDialog: false,
        });
    }
    sendData(ev){
            
            const city1 = this.state.city1
            const cluster1 = this.state.cluster1
            const space = this.state.space
            const data = { city1, cluster1, space }
        
            Axios.get('http://localhost:9090/examples/filter.jsp', { params: data }).then(response => {
                console.log(response);
                this.setState({message:response.data.response})
            }).catch(err => {
                console.log("Failed-filter");
            })
            this.Redirect();
    }
    Redirect=()=>
    {
        window.location = "P2";
    }
    search(ev){
            
        const name1 = this.state.name1
        const data = { name1 }
    
        Axios.get('http://localhost:9090/examples/search.jsp', { params: data }).then(response => {
            console.log(response);
            this.setState({message:response.data.response})
        }).catch(err => {
            console.log("Failed-search");
        })
        this.Redirect1();
    }
    Redirect1=()=>
    {
        window.location = "P3";
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
        return (
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
                        <Typography variant="h6">Search</Typography>
                    </div>
                    <div className="w5">
                        <AppBar placeholder="Search…" position="static" style={{backgroundColor:"silver",padding:"0.5em",width:"20em",cursor:"text"}}
                            onChange={this.update.bind(this)}
                        >
                        <SearchIcon style={{cursor:"pointer"}}
                        onClick={this.search.bind(this)}
                        />
                        </AppBar>
                    </div> 
                </div>
                <div className="w6">
                    <div className="w7">
                        <Typography variant="h6">Filter :</Typography>
                    </div>
                    <div className="w8">
                        <TextField
                            label="City"
                            id="outlined-size-small"
                            variant="outlined"
                            size="small"
                            onChange={this.update.bind(this)}
                        />
                    </div> 
                    <div className="w9">
                    <TextField
                            label="Cluster"
                            id="outlined-size-small"
                            variant="outlined"
                            size="small"
                            onChange={this.update.bind(this)}
                        />
                    </div>
                    <div className="w10">
                    <TextField
                            label="Space Available Limit"
                            id="outlined-size-small"
                            variant="outlined"
                            size="small"
                            onChange={this.update.bind(this)}
                        />
                    </div>
                    <div className="w11">
                        <Button type="button"  
                            onClick={this.sendData.bind(this)}
                        >Search
                        </Button>
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
                                    <StyledTableCell align="center" style={{paddingLeft:"27em"}}>Cluster</StyledTableCell>
                                </TableRow>
                                </Card>
                            </TableHead>
                            <TableBody align="justify">
                                {Dataitem.map((ag, index) => (
                                <Card style={{marginTop:"1em"}}>
                                    <TableRow >
                                        <StyledTableCell 
                                            style={{ cursor: "pointer", color: "blue" }}
                                            onClick={this.handleData.bind(this, index)}
                                        >
                                            {ag.name}
                                        </StyledTableCell>
                                        <StyledTableCell align="justify" style={{paddingLeft:"22em"}}>
                                            {ag.city}
                                        </StyledTableCell>
                                        <StyledTableCell style={{paddingLeft:"21em"}}>
                                            {ag.cluster}
                                        </StyledTableCell>
                                    </TableRow>
                                </Card>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Container>
                <Dialog  style={{width:"38em",marginLeft:"20em"}}
                    open={this.state.openDialog}
                    onCancel={this.handleCloseDialog}
                >
                    <DialogTitle >Warehouse Details</DialogTitle><hr/>
                    <DialogContent>
                        <TextField style={{marginBottom:"1em",marginRight:"0.7em"}}
                        id="outlined-basic" 
                        label="Name"
                        defaultValue={this.state.warehouse.name} 
                        variant="outlined"
                        onChange={this.update.bind(this)}
                        ></TextField>

                        <TextField style={{marginBottom:"1em",marginRight:"0.7em"}}
                        id="outlined-read-only-input"                        
                        label="Code"
                        defaultValue={this.state.warehouse.code} 
                        variant="outlined"
                        InputProps={{
                            readOnly: true,
                        }}
                        ></TextField>

                        <TextField style={{marginBottom:"1em",marginRight:"0.7em"}}
                        id="outlined-basic" 
                        label="City"
                        defaultValue={this.state.warehouse.city} 
                        variant="outlined"
                        onChange={this.update.bind(this)}
                        ></TextField>

                        <TextField style={{marginBottom:"1em",marginRight:"0.7em"}}
                        id="outlined-read-only-input"                        
                        label="ID"
                        defaultValue={this.state.warehouse.id} 
                        variant="outlined"
                        InputProps={{
                            readOnly: true,
                        }}
                        ></TextField>

                        <TextField style={{marginBottom:"1em",marginRight:"0.7em"}}
                        id="outlined-basic" 
                        label="Space Available"
                        defaultValue={this.state.warehouse.space_available} 
                        variant="outlined"
                        onChange={this.update.bind(this)}
                        ></TextField>

                        <TextField style={{marginBottom:"1em",marginRight:"0.7em"}}
                        id="outlined-read-only-input"                        
                        label="Type"
                        defaultValue={this.state.warehouse.type} 
                        variant="outlined"
                        InputProps={{
                            readOnly: true,
                        }}
                        ></TextField>

                        <TextField style={{marginBottom:"1em",marginRight:"0.7em"}}
                        id="outlined-basic" 
                        label="Cluster"
                        defaultValue={this.state.warehouse.cluster} 
                        variant="outlined"
                        onChange={this.update.bind(this)}
                        ></TextField>

                        <TextField style={{marginBottom:"1em",marginRight:"0.7em"}}
                        id="outlined-read-only-input"
                        label="Is Registered"
                        defaultValue={this.state.warehouse.is_registered} 
                        variant="outlined"
                        InputProps={{
                            readOnly: true,
                        }}
                        ></TextField>

                        <TextField style={{marginBottom:"1em",marginRight:"0.7em"}}
                        id="outlined-basic" 
                        label="IsLive"
                        defaultValue={this.state.warehouse.is_live} 
                        variant="outlined"
                        onChange={this.update.bind(this)}
                        ></TextField>
                    </DialogContent>
                    <DialogActions>
                        <Button type="button" color="primary" 
                        onClick={this.handleCloseDialog.bind(this)}
                        
                        >
                            Save Changes
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}
export default Page1;
