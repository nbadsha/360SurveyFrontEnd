import React, { Component } from 'react'
import { AgGridColumn, AgGridReact } from 'ag-grid-react'
import api from '../../APIs/360SurveyApi'
import './SurveyReport.css'

import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'

const camelcase = require('camelcase')

export default class SurveyReport extends Component {
    constructor(){
        super()
        this.getAvgRatings = this.getAvgRatings.bind(this)
        this.getTotalSurveyReport = this.getTotalSurveyReport.bind(this)  
        this.onGridReady = this.onGridReady.bind(this)  
        this.exportToCSV = this.exportToCSV.bind(this)  
        this.state = {

            tblType:0,
            tableCols:[],
            tableData:[],
            gridAPI:[],
            gridColAPI:[]
        }
    }

    componentDidMount(){
        this.getAvgRatings = this.getAvgRatings.bind(this)
        this.getTotalSurveyReport = this.getTotalSurveyReport.bind(this)              
    }

    getAvgRatings(){
        const tableCols = ['cand_name']
        api.get('getAvgRatings').then((res)=>{
            console.log('getAvgRatings',res.data)
            // console.log(res.data[0])
            // this.setState({avgRatingData:res.data})
            const surveyData = res.data[0]

            const traitNames = res.data[1]

            const modTraitNames = []    
                   
            traitNames[0].map((trait)=>{                
                modTraitNames.push(trait.trait_name)
            })
            
            const newTableCols = tableCols.concat(modTraitNames)
            
            const tableHeader = []

            newTableCols.map((col)=>{
                let fieldData={
                    headerName: camelcase(col,{pascalCase: true}), field: col, width: 150 
                }
                tableHeader.push(fieldData)
            })

            this.setState({tableCols:tableHeader,tableData:surveyData,tblType:2})
        })        
    }

    getTotalSurveyReport(){
        const tableCols = ['candidate','respondent','relation']        
        api.get('getSurveyReport').then((res)=>{
            // console.log('getTotalSurveyReport',res.data)
            // this.setState({totalSurveyData:res.data})
            const surveyData = res.data[0]

            const traitNames = res.data[1]

            const modTraitNames = []    
                   
            traitNames[0].map((trait)=>{                
                modTraitNames.push(trait.trait_name)
            })
            
            const newTableCols = tableCols.concat(modTraitNames)
            
            const tableHeader = []

            newTableCols.map((col)=>{
                let fieldData={
                    headerName: camelcase(col,{pascalCase: true}), field: col, width: 250 
                }
                tableHeader.push(fieldData)
            })

            this.setState({tableCols:tableHeader,tableData:surveyData,tblType:1})
        })
    }

    exportToCSV(){
        if (this.state.tblType===1) {
             this.state.gridAPI.exportDataAsCsv({fileName:'TotalSurveyData.csv'});
        } else if(this.state.tblType===2) {
            this.state.gridAPI.exportDataAsCsv({fileName:'AverageSurveyData.csv'});
        }       
    }

    onGridReady(params){
        this.setState({gridAPI:params.api, gridColAPI:params.columnApi})
    }


    render() {
        console.log('tableCols',this.state.tableCols)
        console.log('tableData',this.state.tableData)
        return (
            <div className='container ag-theme-alpine' style={{width:'100vh',height:'75vh',}}>
                <div className='navbar  nvbg'>              
                    
                    <div className='wrapper'>
                        <button className='btn btn-light mx-2 getReport' onClick={this.getTotalSurveyReport}><i class="far fa-list-alt"></i> Total Survey Report</button>
                        <button className='btn btn-light mx-2 getReport' onClick={this.getAvgRatings}><i class="fas fa-list"></i> Average Survey Report</button>
                        <button className='btn btn-light mx-2 getReport' onClick={this.exportToCSV}><i class="fas fa-download"></i> Export to CSV</button>
                    </div>                
                    
                </div>
                <AgGridReact
                columnDefs = {this.state.tableCols}
                rowData = {this.state.tableData}
                onGridReady={this.onGridReady}
                >
                <AgGridColumn field='count' headerName='#'></AgGridColumn>        


                </AgGridReact>
            </div>
        )
    }
}
