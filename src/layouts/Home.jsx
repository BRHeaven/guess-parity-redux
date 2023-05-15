/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { connect } from 'react-redux';

function Home(props) {
    let {win,lose,round,select} = props.reducerPlayer.player
    const renderDice = () => {
        return props.reducerDice.diceArray.map((object, index) => {
            return <img src={`./images/dice-${object.value}.png`} key={index}/>
        })
    }
    return (
        <section>
            <div className="sectonContent">
                <div className="homeTop">
                    <button onClick={()=>{props.setGuessParity(true)}}>even</button>
                    <div className='result'>
                        {renderDice()}
                    </div>
                    <button onClick={()=>{props.setGuessParity(false)}}>odd</button>
                </div>
                <div className="homeBottom">
                    <ul className="listPlayer">
                    <li className="itemPlayer">
                            <p className="title"></p>
                            <p className="value">{select}</p>
                        </li>
                        <li className="itemPlayer">
                            <p className="title">win</p>
                            <p className="value">{win}</p>
                        </li>
                        <li className="itemPlayer">
                            <p className="title">lose</p>
                            <p className="value">{lose}</p>
                        </li>
                        <li className="itemPlayer">
                            <p className="title">round</p>
                            <p className="value">{round}</p>
                        </li>
                    </ul>
                    <button onClick={()=> {props.startRound();props.checkResult(props.reducerDice.diceArray)}}>Play</button>
                </div>
            </div>
        </section>
    );
};
const mapStateToProps = state => {
    return {
        reducerDice : state.reducerDice,
        reducerPlayer: state.reducerPlayer
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        setGuessParity : ( flag ) => {
            let action = {
                type : "set_Guess_Parity",
                flag
            }
            dispatch(action);
        },
        startRound : () => {
            let action = {
                type : "start_Round"
            }
            dispatch(action);
        },
        checkResult : (value) => {
            let action = {
                type : "check_Result",
                value : value
            }
            dispatch(action);
        }
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(Home);
