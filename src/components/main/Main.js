import "./Main.css"
import Chart from "../charts/Charts"
import Table from "../table2/Table"
import Customer from  "./customer"
import Message from "./message"

const Main = () => {
    return (
        <main>
            <div className="main__container">
                <div className="main__title">
                    <div className="main__greeting">
                        <h1>Overview</h1>
                    </div>
                </div>
                <div className="main_cards">
                    <div className="main__cards1">
                        <div className="card_inner">                        
                            <p className="text-primary-p">Registered companies</p>                        
                            <span className="font-bold text-title"> 849</span>
                            <i className="fa fa-arrow-up"></i>
                            <p className="text-primary-p">Since last week</p> 
                        </div>            
                    </div>
                    <div className="main__cards2">
                        <div className="card_inner">                        
                            <p className="text-primary-p">Registered companies</p>                        
                            <span className="font-bold text-title"> 849</span>
                            <i className="fa fa-arrow-up"></i>
                            <p className="text-primary-p">Since last week</p> 
                        </div>  
                    </div>
                    <div className="main__cards3">
                        <div className="card_inner">                        
                            <p className="text-primary-p">Registered companies</p>                        
                            <span className="font-bold text-title"> 849</span>
                            <i className="fa fa-arrow-up"></i>
                            <p className="text-primary-p">Since last week</p> 
                        </div>  
                    </div>
                    <div className="main__cards4">
                        <div className="card_inner">                        
                            <p className="text-primary-p">Registered companies</p>                        
                            <span className="font-bold text-title"> 849</span>
                            <i className="fa fa-arrow-up"></i>
                            <p className="text-primary-p">Since last week</p> 
                        </div>  
                    </div>
                </div>
                 <Chart />
                 <div className="charts">
                    <div className="charts__left">
                        <div className='chart_table'>
                            <div>
                                <button>All</button>
                                <button>Approval</button>
                                <button>Pending</button>
                                <button>Decline</button>
                            </div>
                            <select>select</select>
                        </div>
                       <Table />
                    </div>
                    <div className="charts__right">
                        <Customer />
                        <Message />
                    </div>
                 </div>        
            </div>
        </main> 
    )
}

export default Main;