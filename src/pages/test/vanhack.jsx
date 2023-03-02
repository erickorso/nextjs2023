import React, { useState } from "react";
import MainTemplate from '@/templates/main'
import styled from "styled-components";

const InputBox = styled.div`
    padding: 5px;
    background-color: #ccc;
    border-radius: 5px;
`

const StageContainer = styled.div`
    padding: 10px;
    border-radius: 5px;
    background-color: #ccc;
    display: flex;
    min-width: 500px;
    justify-content: space-between;
    min-height: 300px;
`

const ListItemsContainer = styled.div`
    width: 100%;
    padding: 5px;
    margin: 5px;
    border: solid palevioletred 1px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2{
        border-bottom: solid 2px palevioletred;
        text-align: center;
    }

    .assembly-item{
        color: palevioletred;
        font-size: 1em;
        margin: 0.5em;
        padding: 0.25em 1em;
        border: 2px solid palevioletred;
        border-radius: 3px;
        display: block;
    }
`

const getStageIndex = (stage, stages) => stages.findIndex(el => el === stage)

const getTime = () => {
    const time = Date.now();
    return new Date(time);
}

const getDefaultState = stages => {
    let defaultStages = {}
    stages.forEach(stage => defaultStages[stage] = [])
    return defaultStages
}

const ListItems = ({ list, title, actionL, actionR }) => (
    <ListItemsContainer className="assembly-stage">
        <h2>{title}</h2>
        <div>
            {
                list && list[0] ?
                    list.map((listItem, key) => (
                        <button
                            className="assembly-item"
                            key={`${title}-${key}`}
                            onClick={() => actionL(listItem)}
                            onContextMenu={(e) => actionR(e, listItem)}
                        >{listItem.title}</button>
                    )) :
                    null
            }
        </div>
    </ListItemsContainer>
)

const DoneItems = ({ list, title }) => (
    <div className="assembly-stage">
        <h2>{title}</h2>
        <ul>
            {
                list && list[0] ?
                    list.map((listItem, key) => (
                        <li
                            className="assembly-item"
                            key={`${title}-${key}`}
                        >{`${listItem.title} / Done: ${listItem.date}`} </li>
                    )) :
                    null
            }
        </ul>
    </div>
)

const defaultStages = ["Idea", "Development", "Testing", "Deployment"]

const AssemblyLine = ({ stages = defaultStages }) => {

    const defaultItems = getDefaultState(stages)

    const [input, setInput] = useState('')
    const [items, setItems] = useState(defaultItems)
    const [done, setDone] = useState([])

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handlerPress = (e) => {
        if (e.key === 'Enter') {
            setItems({ ...items, Idea: [{ title: input, stage: stages[0] }, ...items.Idea] })
            setInput('')
        }
    };

    const handleRightClick = (e, item) => {
        e.preventDefault()
        let index = getStageIndex(item.stage, stages)
        const current = stages[index]
        if (index > 0) {
            const prev = stages[index - 1]
            setItems({
                ...items,
                [current]: [
                    ...items[current].filter(currentItem => currentItem.title !== item.title)
                ],
                [prev]: [
                    ...items[prev],
                    { ...item, stage: prev }
                ]
            })
        } else {
            setItems({
                ...items,
                [current]: [
                    ...items[current].filter(currentItem => currentItem.title !== item.title)
                ]
            })
        }
    }

    const handleLeftClick = (item) => {
        let index = getStageIndex(item.stage, stages)
        const current = stages[index]
        index++
        let next = 'Done'
        if (index < stages.length) {
            next = stages[index]
            setItems({
                ...items,
                [current]: [
                    ...items[current].filter(currentItem => currentItem.title !== item.title)
                ],
                [next]: [
                    { ...item, stage: next },
                    ...items[next]
                ]
            })
        } else {
            setItems({
                ...items,
                [current]: [
                    ...items[current].filter(currentItem => currentItem.title !== item.title)
                ]
            })
            setDone([
                { ...item, date: getTime() },
                ...done
            ])
        }
    }

    return (
        <MainTemplate>
            <InputBox className="input-box">
                <label htmlFor="add-item-input">Add an Item: </label>
                <input
                    id="add-item-input"
                    className="assembly-add-item"
                    onChange={(e) => handleChange(e)}
                    onKeyPress={(e) => handlerPress(e)}
                    value={input}
                />
            </InputBox>
            <hr />
            <StageContainer className="stage-container">
                {
                    stages.map((stage, key) =>
                        <ListItems
                            key={`lsitItems${key}`}
                            actionR={handleRightClick}
                            actionL={handleLeftClick}
                            list={items[stage]}
                            title={stage} />
                    )
                }
            </StageContainer>
            <hr />
            <DoneItems list={done} title='Done' />
        </MainTemplate>
    );
}

export default AssemblyLine;