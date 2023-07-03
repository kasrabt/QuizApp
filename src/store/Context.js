import React, {useState} from "react";

export const MainContext = React.createContext({
    subtract: () => {
    },
    Sum: () => {
    },
    selectName: (txt) => {
    },
    answerCounter: () => {
    },
    totalValue: 0,
    name: '',
    AnswerCount: 0,
})

const ContextProvider = (props) => {
    const [value, setValue] = useState(0)
    const [userName, setUserName] = useState('')
    const [AnswersC, setAnswersC] = useState(0)
    const AnsWerCounter = () => {
        setAnswersC(current => current + 1)
    }
    const subtractHandler = () => {
        setValue(0)
        setAnswersC(0)
    }
    const SumHandler = () => {
        setValue(current => current + 1)
    }
    const NameHandler = (txt) => {
        setUserName(txt)
    }
    const data = {
        subtract: subtractHandler,
        Sum: SumHandler,
        selectName: NameHandler,
        answerCounter: AnsWerCounter,
        name: userName,
        totalValue: value,
        AnswerCount: AnswersC,
    }
    return (<MainContext.Provider value={data}>{props.children}</MainContext.Provider>)
}
export default ContextProvider