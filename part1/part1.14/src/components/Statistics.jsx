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
            <table>
                <thead>
                    <tr>
                        <th> Statistics </th>
                    </tr>
                </thead>



                {(props.total === 0)
                    ?
                    <tbody>
                        <tr>
                            <td> No feedback given</td>
                        </tr>
                    </tbody>
                    :

                    <tbody>
                        <tr>
                            <StatisticLine review="Good" />
                            <StatisticLine review={props.good} />
                        </tr>

                        <tr>
                            <StatisticLine review="Neutral" />
                            <StatisticLine review={props.neutral} />
                        </tr>

                        <tr>
                            <StatisticLine review="Bad" />
                            <StatisticLine review={props.bad} />
                        </tr>

                        <tr>
                            <StatisticLine review="All" />
                            <StatisticLine review={props.total} />
                        </tr>

                        <tr>
                            <StatisticLine review="Positive" />
                            <StatisticLine review={props.positive()} />
                        </tr>

                        <tr>
                            <StatisticLine review="Average" />
                            <StatisticLine review={props.average()} />
                        </tr>
                    </tbody>

                }
            </table>

        </>
    )
}

export default Statistics;
