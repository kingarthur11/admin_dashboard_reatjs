import cregital2 from "../../asset/cregital2.PNG"
import cregital from '../../asset/cregital.PNG'
import imperialsoft from '../../asset/imperialsoft.PNG'
import intelia from '../../asset/intelia.PNG'
import talosmat from '../../asset/talosmat.PNG'

const Message = () => {
    return (
<div className="charts__right__message">
    <h1>Message</h1>                        
    <dv className="charts__part">
        <img width="30" src={cregital} alt="image" />
        <div className="charts__part1">
            <h3>Cregital</h3>
            <p>Hey don't forget to clear server catch!</p>
            <br />
            <p>25mins ago</p>
        </div>
        <i className="fa fa-ellipsis-v"></i>
    </dv>
    <hr />
    <dv className="charts__part">
        <img width="30" src={intelia} alt="image" />
        <div className="charts__part1">
            <h3>Cregital</h3>
            <p>Hey don't forget to clear server catch!</p>
            <br />
            <p>25mins ago</p>
        </div>
        <i className="fa fa-ellipsis-v"></i>
    </dv>
    <hr />
    <dv className="charts__part">
        <img width="30" src={talosmat} alt="image" />
        <div className="charts__part1">
            <h3>Cregital</h3>
            <p>Hey don't forget to clear server catch!</p>
            <br />
            <p>25mins ago</p>
        </div>
        <i className="fa fa-ellipsis-v"></i>
    </dv>
    <hr />
    <dv className="charts__part">
        <img width="30" src={imperialsoft} alt="image" />
        <div className="charts__part1">
            <h3>Cregital</h3>
            <p>Hey don't forget to clear server catch!</p>
            <br />
            <p>25mins ago</p>
        </div>
        <i className="fa fa-ellipsis-v"></i>
    </dv>
    <hr />
    <dv className="charts__part">
        <img width="30" src={cregital2} alt="image" />
        <div className="charts__part1">
            <h3>Cregital</h3>
            <p>Hey don't forget to clear server catch!</p>
            <br />
            <p>25mins ago</p>
        </div>
        <i className="fa fa-ellipsis-v"></i>
    </dv>
    </div>
    )
}
export default Message;
