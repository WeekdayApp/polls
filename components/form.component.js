import React, { useState, useEffect } from 'react'
import { Progress, Button, Input, Textarea, Select } from '@weekday/elements'
import moment from 'moment'
import { Trash } from 'react-feather'

export default function FormComponent(props) {
  const today = moment()
  const months = [
    { option: 'January', value: 1 },
    { option: 'February', value: 2 },
    { option: 'March', value: 3 },
    { option: 'April', value: 4 },
    { option: 'May', value: 5 },
    { option: 'June', value: 6 },
    { option: 'July', value: 7 },
    { option: 'August', value: 8 },
    { option: 'September', value: 9 },
    { option: 'October', value: 10 },
    { option: 'November', value: 11 },
    { option: 'December', value: 12 },
  ]
  const years = [
    { option: today.year(), value: today.year() },
    { option: today.year() + 1, value: today.year() + 1 },
  ]
  const [days, setDays] = useState(null)

  const [id, setId] = useState(null)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [questions, setQuestions] = useState([{id: 0, text: ''}])

  // These all set the index
  const [day, setDay] = useState(today.format('D') - 1)
  const [month, setMonth] = useState(today.format('M') - 1)
  const [year, setYear] = useState(0)

  const addQuestion = () => setQuestions([...questions, {
    id: questions.length + 1,
    text: '',
  }])

  const removeQuestion = (index) => {
    let mutableQuestions = Object.assign([], questions)
    mutableQuestions.splice(index, 1)
    setQuestions(mutableQuestions)
  }

  const updateQuestion = (text, id) => {
    setQuestions(questions.map(question => {
      if (id != question.id) return question

      return { id: question.id, text }
    }))
  }

  const save = () => {
    const expiry = moment(`${day}/${month}/${year}`, 'DD/MM/YYYY').toDate()

    // If we are updating
    if (id) props.onSubmit(id, title, description, questions, expiry)

    // If we are creating
    if (!id) props.onSubmit(title, description, questions, expiry)
  }

  const updateMonthDays = () => {
    const daysInMonth = moment(`${day}/${month}/${year}`, 'DD/MM/YYYY').daysInMonth()
    const daysArray = []

    for (let day=1; day <= daysInMonth; day++) {
      daysArray.push({ option: day, value: day })
    }

    setDays(daysArray)
  }

  useEffect(() => {
    if (!props.id) return updateMonthDays()
    if (!props.expiry) return updateMonthDays()

    const date = moment(props.expiry)
    const yearIndex = years.map(y => y.value).indexOf(parseInt(date.format('YYYY')))

    setId(props.id)
    setTitle(props.title)
    setDescription(props.description)
    setQuestions(props.questions)

    setDay(date.format('D') - 1)
    setMonth(date.format('M') - 1)
    setYear(yearIndex == -1 ? 0 : yearIndex)

    updateMonthDays()
  }, [])

  return (
    <React.Fragment>
      <style jsx>{`
        .poll-container {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: stretch;
          align-content: center;
          justify-content: center;
        }

        .poll-inner {
          flex-direction: column;
          display: flex;
          align-items: center;
          align-content: center;
          justify-content: center;
        }

        .progress-container {
          margin-bottom: 5px;
          width: 100%;
        }
      `}</style>

      <div className="poll-container">
        <div className="poll-inner">
          <div className="h4 color-d3 text-left w-100 mb-20">Create a new poll</div>

          <Input
            value={title}
            inputSize="large"
            placeholder="Poll title"
            onChange={e => setTitle(e.target.value)}
          />

          <Textarea
            value={description}
            textareaSize="large"
            placeholder="Poll description"
            rows={3}
            onChange={e => setDescription(e.target.value)}
          />

          <div className="h5 color-d0 text-left w-100 mb-10 mt-20">Questions</div>

          {questions.map((question, index) => {
            return (
              <div className="row w-100 mb-5" key={index}>
                <Input
                  value={question.text}
                  placeholder="Option text"
                  inputSize="large"
                  onChange={e => updateQuestion(e.target.value, question.id)}
                />
              <Trash
                  color="#ACB5BD"
                  size="20"
                  thickness="1.5"
                  className="ml-20 button"
                  onClick={e => removeQuestion(index)}
                />
              </div>
            )
          })}

          <div className="h5 color-d0 text-left w-100 mb-10 mt-20">Expiry</div>

          {days &&
            <div className="row w-100">
              <div className="flexer column pr-10">
                <div className="small color-d0 text-left bold mb-5">Day</div>
                <Select
                  selected={day}
                  size="large"
                  onSelect={(index) => setDay(index)}
                  options={days}
                />
              </div>

              <div className="flexer column p-10">
                <div className="small color-d0 text-left bold mb-5">Month</div>
                <Select
                  selected={month}
                  size="large"
                  onSelect={(index) => setMonth(index)}
                  options={months}
                />
              </div>

              <div className="flexer column pl-10">
                <div className="small color-d0 text-left bold mb-5">Year</div>
                <Select
                  selected={year}
                  size="large"
                  onSelect={(index) => setYear(index)}
                  options={years}
                />
              </div>
            </div>
          }

          <div className="row w-100 mt-20">
            <Button
              size="small"
              theme="blue-border"
              text="Add a new question"
              onClick={addQuestion}
            />
            <div className="flexer" />
            <Button
              size="small"
              theme="blue"
              text={!props.id ? "Create poll" : "Update poll"}
              onClick={save}
            />
          </div>

        </div>
      </div>
    </React.Fragment>
  )
}