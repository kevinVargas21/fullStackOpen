import React from 'react'


export const average = (total, good, bad) => {
    if (total === 0) {
        return 0;
    }
    const result = (good - bad) / total;
    return result.toFixed(2)
};

export const positive = (total, good) => {
    if (total === 0) {
        return 0;
    }
    const result = (good / total) * 100;
    return result.toFixed(2) + "%";
};

const Statistics = (props) => {




    return (
        <>
            <h2> Statistics </h2>
            
            {(props.total === 0)
                ?
                <h3> No feedback given</h3>
                :
                <div>
                    <p> Good {props.good}</p>
                    <p> Neutral {props.neutral}</p>
                    <p> Bad {props.bad}</p>
                    <p> All {props.total} </p>
                    <p> Positive {props.positive()}</p>
                    <p> Average {props.average()}</p>
                </div>

            }



        </>
    )
}

export default Statistics;

