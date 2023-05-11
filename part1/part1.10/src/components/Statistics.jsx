import React from 'react'
import StatisticLine from './StatisticLine';

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
                    <StatisticLine text="Good" review={props.good} />
                    <StatisticLine text="Neutral" review={props.neutral} />
                    <StatisticLine text="Bad" review={props.bad} />
                    <StatisticLine text="All" review={props.total} />
                    <StatisticLine text="Positive" review={props.positive()} />
                    <StatisticLine text="Average" review={props.average()} />
                </div>

            }



        </>
    )
}

export default Statistics;

